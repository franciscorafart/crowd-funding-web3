'reach 0.1';

const Song = Tuple(Bytes(64), Bytes(64), UInt) // Title, id, Price
const deadline = 50;

export const main = Reach.App(() => {
  const A = Participant('Artist', {
    perks: Array(Song, 4), // TODO: figure out flexible array
    getPickedPerk: Fun([Bytes(64)], Bytes(64)), // Gets id, returns asset url
    provideTotalPrice: Fun([Bytes(64)], UInt),
  });

  const F = API('Fan', {
    pickPerk: Fun([Array(Song, 4)], Bytes(64)), // Or Pick rewards
    confirmPrice: Fun([UInt], Bool),
  });
  init();

  const informTimeout = () => {
    each([A, F], () => {
        interact.informTimeout();
    });
  };

  A.only(() => {
    const catalog = declassify(interact.perks);
  });

  // The first one to publish deploys the contract
  A.publish(catalog);
  commit();

  F.only(() => {
    const pickedPerk = intract.pickPerk(catalog);
  });

  // The second one to publish always attaches
  F.publish(pickedPerk).timeout(
    RelativeTime(deadline), () => closeTo(A, informTimeout)
  );
  commit();

  A.only(() => {
    const totalPrice = interact.provideTotalPrice(pickedPerk);
  });

  A.publish(totalPrice);
  commit();

  F.only(() => {
    const priceAccepted = interact.confirmPrice(totalPrice);
  });

  F.publish(priceAccepted).timeout(RelativeTime(deadline), () => informTimeout);
  commit();
  
  if (!priceAccepted) {
    closetTo(A); // TODO: Add log function
  }

  F.pay(totalPrice);
  commit();

  // TODO: Check picked songs hasn't changed
  A.only(() => {
    const perkUrl = declassify(interact.getPickedPerkl(pickedPerk));
  });

  A.publish(perkUrl).timeout(RelativeTime(deadline), () => closeTo(F, informTimeout));
  
  transfer(totalPrice, A);
  commit();
  
  exit();
});
