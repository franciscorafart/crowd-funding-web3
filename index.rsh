'reach 0.1';

const Song = Tuple(Bytes(64), Bytes(64), UInt) // Title, id, Price
const deadline = 50;

export const main = Reach.App(() => {
  const A = Participant('Artist', {
    provideCatalog: Fun([], Array(Song, 10)), // TODO: figure out flexible array
    getSoldSongs: Fun([Array(Bytes(64), 10)], Array(Bytes(64), 10)), // Gets list if ids, returns list of URLs
    totalPrice: UInt,
  });

  const F = API('Fan', {
    getCatalog: Fun([Array(Song, 10)], Null),
    pickSongs: Fun([], Array(Bytes(64), 10)),
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
  F.publish(pickedSongs).timeout(RelativeTime(deadline), () => closeTo());
  commit();

  A.pu

  // write your program here
  exit();
});
