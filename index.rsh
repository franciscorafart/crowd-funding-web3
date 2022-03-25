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
    pickPerk: Fun([Bytes(64)], Array(Song, 4)),
    confirmPrice: Fun([UInt], UInt),
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
    const [ pickedPerkId, setPerksParams ] = call(F.pickPerk).throwTimeout(
      relativeTime(deadline), () => closeTo(A, informTimeout)
    );
    setPerksParams(catalog);

    // const getFromMaybe = (m) => fromMaybe(m, (() => Null), (x) => x);
    
    // Is pickedPerkId an actual value? I think it's a Maybe
    const pickedPerk = catalog.find(perk => perk[1] === pickedPerkId);
    if (isNone(pickedPerk)) {
      continue;
    }

    const getPriceMaybe = (m) => fromMaybe(m, (() => 0), ((x) => x[2]));
    const price = getPriceMaybe(pickedPerk);
    commit();
    
    const [p, setPriceParams] = call(F.confirmPrice)
      .assume((x) => assume(x == price))
      .pay((a) => a)
      .throwTimeout(
        relativeTime(deadline), 
        () => closeTo(A, informTimeout)
      );
    setPriceParams(price);

    // if (!(p[0] == price)) {
    //   continue;
    // }

    // F.pay(price);
    totalPool = totalPool + p[0];
    // Listener.interact.hear(...pickedPerk);
    continue;
  }

  if (totalPool < goal) {
    tranfer(F, price);
  } else {
    tranfer(A, totalPool);
  }

  commit();
  exit();
});
