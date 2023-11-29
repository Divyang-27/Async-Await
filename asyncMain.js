console.log("person 1: shows ticket");
console.log("person 2: shows ticket");

const preMoviemess = async () => {
  const promiseWifebringsTicks = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ticket");
    }, 3000);
  });

  const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
  const getColdrink = new Promise((resolve, reject) => resolve(`coldrink`));
  const getButter = new Promise((resolve, reject) => resolve(`butter`));

  let ticket = await promiseWifebringsTicks;
  console.log(`wife: I have the ${ticket}`);
  console.log("husband: we should go in");
  console.log("wife: no I am hungry");
  let [popcorn, butter, coldrink] = await Promise.all([
    getPopcorn,
    getButter,
    getColdrink,
  ]);
  console.log(`husband: i got some ${butter}`);
  console.log(`husband: I got some ${popcorn}`);
  console.log(`husband: I got some ${coldrink}`);
  console.log(`wife:lets goooooooooooo!`);
  return ticket;
};
preMoviemess().then((m) => console.log(`person 3: shows ${m}`));
console.log("person 4: shows ticket");
console.log("person 5: shows ticket");
