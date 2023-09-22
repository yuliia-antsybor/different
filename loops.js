// const subscribers = [
//   { name: 'Lena', isCloseFriend: true },
//   { name: 'Olya', isCloseFriend: true },
//   { name: 'Nastya', isCloseFriend: false },
//   { name: 'Oleh', isCloseFriend: true },
//   { name: 'Roma', isCloseFriend: false },
//   { name: 'Pavlo', isCloseFriend: false },
// ];

// //цикл for(якщо треба знати поточний індекс елемента)
// for (let i = 0; i < subscribers.length; i++) {
//   console.log(subscribers[i])
// }
// // --> result

// // VM88:12 {name: 'Lena', isCloseFriend: true}
// // VM88:12 {name: 'Olya', isCloseFriend: true}
// // VM88:12 {name: 'Nastya', isCloseFriend: false}
// // VM88:12 {name: 'Oleh', isCloseFriend: true}
// // VM88:12 {name: 'Roma', isCloseFriend: false}
// // VM88:12 {name: 'Pavlo', isCloseFriend: fals


// // цикл for of(якщо просто потрібно пробігтися по елементах)
// for (const item of subscribers) {
//   console.log(item);
// }

// // --> result
// // VM142:12 {name: 'Lena', isCloseFriend: true}
// // VM142:12 {name: 'Olya', isCloseFriend: true}
// // VM142:12 {name: 'Nastya', isCloseFriend: false}
// // VM142:12 {name: 'Oleh', isCloseFriend: true}
// // VM142:12 {name: 'Roma', isCloseFriend: false}
// // VM142:12 {name: 'Pavlo', isCloseFriend: false}


// // цикл for in (щоб пробігтись по значеннях чи ключах об'єкта)

// const obj = {
//   name: 'Anna',
//   age: 25,
//   nation: 'Ukrainian',
//   gender: 'female'
// }

// for (const key in obj) {
//   console.log(obj[key])
// }

// //--> результатом є значення об'єкта, а не його ключі:
// Anna
// VM147:9 25
// VM147:9 Ukrainian
// VM147:9 female

//цикл while( у цьому циклі потрібно  створити змінну-лічильник до самого циклу)

// let i = 0;
// while(i < subscribers.length) {
//   console.log(subscribers[i]);
//   i++;
// }
//--> результат while
// {name: 'Lena', isCloseFriend: true}
// VM169:12 {name: 'Olya', isCloseFriend: true}
// VM169:12 {name: 'Nastya', isCloseFriend: false}
// VM169:12 {name: 'Oleh', isCloseFriend: true}
// VM169:12 {name: 'Roma', isCloseFriend: false}
// VM169:12 {name: 'Pavlo', isCloseFriend: false}

// //цикл do while(цикл do while виконується хоча б один раз)

// let i = 0;
// do {
//   console.log(subscribers[i]);
// } while (i > 0) 
// i++;
//--> результат do while VM81:12 {name: 'Lena', isCloseFriend: true}

//!Завдання
//написати функцію, яка приймає масив чисе та підноситб до квадрату кожне з них:

//через звич цикл і множення масивів один на один
// variant 1
function squareArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= arr[i]
  }
  return arr;
}
const numbers = [3, 6, 4, 16, 3, 12, 11];
console.log(squareArr(numbers));

//або через Math.pow
//variant 2
undefined
function squareArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.pow(arr[i], 2);
  }
}

const myArray = [3, 6, 4, 16, 3, 12, 11];
squareArr(myArray);
console.log(myArray);