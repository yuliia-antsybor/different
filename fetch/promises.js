//проміс - це асинхронний js, він не блокує виконання коду в основному потоці, стеці

const promise = new Promise((resolve, reject) => {
  const isUserLoggedIn = true;
  if(isUserLoggedIn) {
    resolve('User is logged in')
  } else {
    reject('Sorry, you are not logged in')
  }
})
promise.then((data) => console.log(data));

//--> result if true
//User is logged in
//--> result if false 
//Sorry, you are not logged in

// Ось ще приклад промісу


const promise = new Promise((resolve, reject) => {
  const areYouOver18 = true;
  if (areYouOver18) {
    resolve('Welcome, enjoy the content');
  } else {
    reject('Sorry, you are not 18 yet!');
  }
});

promise.then((data) => console.log(data));

//--> result if true
//Welcome, enjoy the content
//--> result if false 
//'Sorry, you are not 18 yet!


//В ресолві може бути масив тощо
//наприклад:

const promise = new Promise((resolve, reject) => {
  const randomNumbers = true;
  if (randomNumbers) {
    resolve([1, 5, 35, 13, 2])
  } else {
    reject('Incorrect data!')
  }
})

promise.then((data) => console.log(data));

//--> result if true
//[1, 5, 35, 13, 2]
// 0: 1
// 1: 5
// 2: 35 
// 3: 13
// 4: 2
// length: 5[[Prototype]]: Array(0)

//--> result if false 
//Incorrect data!

// Ланцюгові проміси

const promise = new Promise((resolve, reject) => {
  const isUserLoggedIn = true;
  if(isUserLoggedIn) {
    resolve('User is logged in')
  } else {
    reject('Sorry, you are not logged in')
  }
})
promise
.then(data => console.log(data))
.catch(error => console.log(error))

//--> result if true
//User is logged in (тобто викличеться метод.then)
//--> result if false
//Sorry, you are not logged in (тобто викличеться метод .catch)

//додаємо setTimeOut в наш проміс:
const promise = new Promise((resolve, reject) => {
  const isUserLoggedIn = true;
  if(isUserLoggedIn) {
   setTimeout(() => resolve('User is logged in'), 3000);
  } else {
    reject('Sorry, you are not logged in')
  }
})
promise
.then(data => console.log(data))
.catch(error => console.log(error))


//--> result if true
// Promise {<pending>}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: undefined
// VM276:10 User is logged in

