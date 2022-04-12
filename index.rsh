'reach 0.1';
'use strict';

const Song = Tuple(Bytes(64), Bytes(12), UInt) // Title, id, Price

const crowfundingDeadline = 8;

export const main = Reach.App(() => {
  const A = Participant('Artist', {
    ...hasRandom,
    goal: UInt,
    logAmount: Fun([UInt], Null),
  });

  const F = API('Fan', {
    pickPerk: Fun([Song], Null),
  });

  init();
  
  A.publish();
  commit();

  A.only(() => {
    const goal = declassify(interact.goal);
  });

  A.publish(goal);

  const [ timeRemaining, keepGoing ] = makeDeadline(crowfundingDeadline);

  const [totalPool] = parallelReduce([ 0 ])
    .invariant(balance() == totalPool)
    .while(keepGoing())
    .api(
      F.pickPerk,
      _ => {
        assume(1 == 1);
      },
      pickedPerk => pickedPerk[2],
      ((pickedPerk, setPerksParams) => {
        setPerksParams(null);
        const pickedPrice = pickedPerk[2];
        return [totalPool + pickedPrice];
      })
    )
    .timeRemaining(timeRemaining());

  transfer([balance()]).to(A);
  commit();

  A.interact.logAmount(balance());
  A.interact.logAmount(totalPool);

  exit();
});

