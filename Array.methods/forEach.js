//приклад ф-ї фор іч, для підрахунку добутку всіх чисел
const numb = [5, 62, 7, 33, 5, 62, 12];
let sum = 0

numb.forEach(i => {
  sum += i
});
console.log(sum);
//result is - 186


//??????????????????????????????????????????
const arraySparse = [1, 3, 7];
let numCallbackRuns = 0;

arraySparse.forEach((element) => {
  console.log({ element });
  numCallbackRuns++;
});

console.log({ numCallbackRuns });
//result is
// {element: 1}element: 1[[Prototype]]: Object
// {element: 3}element: 3[[Prototype]]: Object
// {element: 7}element: 7[[Prototype]]: Object
// {numCallbackRuns: 3}numCallbackRuns: 3[[Prototype]]: Object

let newNumbArr = [21, 54, 32, 4, 54, 5, 54, 23, 21, 21, 44, 57, 44, 96, 4];
let count = {};

newNumbArr.forEach(item => {
  if (count[item]) {
    count[item]++;
  } else {
    count[item] = 1;
  }
})
console.log(count); 

//result is {4: 2, 5: 1, 21: 3, 23: 1, 32: 1, 44: 2, 54: 3, 57: 1, 96: 1};