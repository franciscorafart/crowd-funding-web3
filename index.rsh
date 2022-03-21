'reach 0.1';

const Song = Tuple(Bytes(64), Bytes(64), UInt) // Title, id, Price
const deadline = 50;

export const main = Reach.App(() => {
  const A = Participant('Artist', {
    provideCatalog: Fun([], Array(Song, 10)), // TODO: figure out flexible array
    getPickedSongs: Fun([Array(Bytes(64), 10)], Array(Bytes(64), 10)), // Gets list if ids, returns list of URLs
    provideTotalPrice: Fun([Array(Bytes(64), 10)], UInt),
  });

  const F = API('Fan', {
    getCatalog: Fun([Array(Song, 10)], Null),
    pickSongs: Fun([], Array(Bytes(64), 10)), // Or Pick rewards
    acceptPrice: Fun([UInt], Bool),
  });
  init();

  const informTimeout = () => {
    each([A, F], () => {
        interact.informTimeout();
    });
  };

  A.only(() => {
    const catalog = declassify(interact.provideCatalog);
  });

  // The first one to publish deploys the contract
  A.publish(catalog);
  commit();

  F.only(() => {
    interact.getCatalog(catalog);
    const pickedSongs = declassify(intract.pickSongs);
  });

  // The second one to publish always attaches
  F.publish(pickedSongs).timeout(
    RelativeTime(deadline), () => closeTo(A, informTimeout)
  );
  commit();

  A.only(() => {
    const totalPrice = declassify(interact.provideCatalog);
  });

  A.publish(totalPrice);
  commit();

  F.only(() => {
    const priceAccepted = declassify(interact.acceptPrice);
  });

  if (!priceAccepted) {
    closetTo(A);
  }

  F.pay(totalPrice);
  commit();

  // TODO: Check picked songs hasn't changed
  A.only(() => {
    const songUrls = declassify(interact.getPickedSongs(pickedSongs));
  });

  A.publish(songUrls).timeout(RelativeTime(deadline), () => closeTo(F, informTimeout));
  
  transfer(totalPrice, A);
  commit();
  
  // write your program here
  exit();
});
