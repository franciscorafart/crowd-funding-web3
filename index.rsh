'reach 0.1';

const Song = Tuple(Bytes(64), Bytes(12), UInt) // Title, id, Price

const crowfundingDeadline = 10;
const deadline = 5;

export const main = Reach.App(() => {
  const A = Participant('Artist', {
    ...hasRandom,
    perks: Array(Song, 4), // TODO: figure out flexible array
    getUrls: Fun([], Array(Bytes(64), 4)),
    goal: UInt,
  });

  const F = API('Fan', {
    pickPerk: Fun([Song], Array(Song, 4)),
  });

  init();
  
  A.publish();
  commit();

  A.only(() => {
    const catalog = declassify(interact.perks);
    const goal = declassify(interact.goal);
  });

  // The first one to publish deploys the contract
  A.publish(catalog, goal);
      
  const end = lastConsensusTime() + crowfundingDeadline;
  
  // TODO: Figure out crowfundingDeadline from dates

  var totalPool = 0;
  invariant(balance() == totalPool);
  while (lastConsensusTime() < end) {
    commit();
    try {
      const [ pickedPerk, setPerksParams ] = call(F.pickPerk).pay(
        (picked) => picked[2]).throwTimeout(
          relativeTime(deadline));
          setPerksParams(catalog);
      totalPool = totalPool + pickedPerk[0][2];
      continue;
    } catch (_) {
      Anybody.publish(); 
      continue;
    }
  }
  transfer(totalPool).to(A);

  commit();
  exit();
});
