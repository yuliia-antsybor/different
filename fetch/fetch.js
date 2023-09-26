fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

// --> result
// {userId: 1, id: 1, title: 'delectus aut autem', completed: false}
// completed: false
// id : 1
// title:  "delectus aut autem"
// userId : 1
// [[Prototype]] : Object

//приклад функції
function fetchUser() {
  return fetch('https://jsonplaceholder.typicode.com/comments/1')
    .then(response => response.json())
    .then(user => user)
}
// викликаємо функцію

// --> result
// Promise {<pending>}
// [[Prototype]]: Promise
// [[PromiseState]]: "rejected"
// [[PromiseResult]]: TypeError: Failed to fetch at fetchUser (<anonymous>:2:16) at <anonymous>:1:

function sayHello() {
  const user = fetchUser();
 console.log(user);
}

sayHello();

//але результатом буде просто promise, а не сам об'єкт user(fetch user повертає promise)
// -->
// Promise {<pending>}
// [[Prototype]]
// : Promise
// catch: ƒ catch()
// constructor
// : ƒ Promise()
// finally: ƒ finally()
// then: ƒ then()
// Symbol(Symbol.toStringTag): "Promise"
// [[Prototype]]: Object
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: Array(500)


//!а для того щоб достукатись до самого об*єкта user, нам потрібно
fetchUser().then(data => {
  alert(`Hello ${data.name}`);
})
//!!
//АЛЕ! Можна використати async await, яка симулює синхронник код, коли віни насправді не є синхронним
async function sayHello(){
  const user = await fetchUser();
  alert(`Hello ${user.name}`);
};
 sayHello();
// await чекає поки проміс виконається, і тоді повертає значення

//або коротше
// наприклад:
async function sayHello() {
  try{
    const user = await fetchUser();
    console.log('Hello ${user.name}');
  }
  catch{
    alert("error messege");
  }
}
