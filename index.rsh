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
    confirmPrice: Fun([Bool], UInt),
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
  
  // Original Participant based version
  // F.only(() => {
    //   const pickedPerk = intract.pickPerk(catalog);
    // });
    
    // // The second one to publish always attaches
    // F.publish(pickedPerk).timeout(
      //   RelativeTime(crowfundingDeadline), () => closeTo(A, informTimeout)
      // );
      // commit();
      
      // // TODO: determine total price from pickedPerk
      
      // transfer(totalPrice, A);
      // commit();
      
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
    
    const pickedPerk = catalog.find(perk => perk[1] === pickedPerkId);
    if (isNone(pickedPerk)) {
      continue;
    }
    const price = pickedPerk.Some(2);
    const [ accepted, setPriceParams] = call(F.confirmPrice).throwTimeout(
      relativeTime(deadline), () => closeTo(A, informTimeout)
    );
    setPriceParams(price);

    if (!accepted) {
      continue;
    }

    F.pay(price);
    totalPool = totalPool + price;
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
