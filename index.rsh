'reach 0.1';

const Song = Tuple(Bytes(64), Bytes(64), UInt) // Title, id, Price

const crowfundingDeadline = 10;
const deadline = 5;

export const main = Reach.App(() => {
  const A = Participant('Artist', {
    ...hasRandom,
    perks: Array(Song, 4), // TODO: figure out flexible array
    getUrls: Fun([], Array(Bytes(64), 4)),
    goal: UInt,
    // TODO: Figure out crowfundingDeadline from dates
  });

  const F = API('Fan', {
    pickPerk: Fun([Song], Array(Song, 4)),
    // confirmPrice: Fun([UInt], UInt),
  });

  init();
  
  const informTimeout = () => {
    each([A, F], () => {
      interact.informTimeout();
    });
  };
  
  A.publish();
  commit();

  A.only(() => {
    const catalog = declassify(interact.perks);
    const goal = declassify(interact.goal);
    const _urls = interact.getUrls();

    const [_urlsCommit, _urlsSalt] = makeCommitment(interact, _urls);
    const urlsCommit = declassify(_urlsCommit);
    // TODO: makeCommit for urls so that F can't see it
  });

  // The first one to publish deploys the contract
  A.publish(catalog, goal, urlsCommit);
      
  // TODO: Parallel reduce??
  const end = lastConsensusTime() + crowfundingDeadline;
  
  var totalPool = 0;
  invariant(balance() == totalPool);
  while (lastConsensusTime() < end) {
    commit();
    const [ pickedPerk, setPerksParams ] = call(F.pickPerk).pay(
      (picked) => picked[2]).throwTimeout(
      relativeTime(deadline), () => closeTo(A, informTimeout)
    );
    setPerksParams(catalog);

    totalPool = totalPool + pickedPerk[0][2];

    continue;
  }

  // Not possible to send arbitrary transfers back to users, I have to implement harvest functionality.
  if (totalPool < goal) {
    tranfer(F, price);
  } else {
    tranfer(A, totalPool);
  }

  commit();
  exit();
});
