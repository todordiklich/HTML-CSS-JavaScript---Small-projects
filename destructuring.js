const obj = {
  firstArr: [1, 2, 3, 4, 5],
  secondArr: [5, 4, 3, 2, 1],
};

// const first = obj.firstArr;
// const second = obj.secondArr[0];
// console.log(first, second);

const {
  firstArr: first,
  secondArr: [second],
} = obj;

console.log(first, second);
