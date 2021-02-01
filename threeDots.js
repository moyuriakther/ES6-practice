const ages = [12, 13, 14, 15, 16];
const ages2 = [17, 13, 18, 19, 11];
const ages3 = [22, 23, 34, 25, 29];
const allAges = ages.concat(ages2).concat([10]).concat(ages3);
const allAges2 = [...ages, ...ages2, 5,...ages3];
allAges.push(5);
// console.log(allAges2);

const minister = 450;
const sochib = 600;
const businessman = 250;
// const maximum =Math.max(minister, sochib, businessman);
const money = [400, 650, 200];
const maximum =Math.max(...money); //js three dots ...
console.log(maximum);