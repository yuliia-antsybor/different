//example with setTimeOut
setTimeout(() => {
console.log('Hello')
})

//Example with array

const companies = [
  {name: "Companie One", category: "Finance", start: 1984, end: 2001},
  {name: "Companie Two", category: "Retail", start: 2003, end: 2020},
  {name: "Companie Three", category: "Auto", start: 1999, end: 2015},
  {name: "Companie Seven", category: "Science", start: 1999, end: 2006}
];



//fisrt example
companies.forEach((companies) => console.log (companies))

//second
const myForEach(arr, cb) => {
  for(let i = 0; i < arr.length; i++ ) {
  const element = arr[i];
cb(element)
}
}
myForEach(companies, (companies) => {
   console.log(companies)
})

//trying split method
const myString = "Hello how are you"
console.log(myString.split(""));

//RESULT HERE ->  ['H', 'e', 'l', 'l', 'o', ' ', 'h', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o', 'u']
//and the same verticaly

 //  Те ж саме зробить аператор spread
  const myString = "Hello how are you"
console.log([...myString]);
//RESULT HERE -> (17) ['H', 'e', 'l', 'l', 'o', ' ', 'h', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o', 'u']

//Як застосувати Math до масиву(використовуючи apply)
//Math.min
const companies = [2, 5, 456, 567, 34, 24, 35, 94, 67];
console.log(Math.min.apply(Math, companies));
//result -> 2

//Math.max
const companies = [2, 5, 456, 567, 34, 24, 35, 94, 67];
console.log(Math.max.apply(Math, companies));
//result -> 567

//Ще, можна використат spread operator, щоб дітсати значення з масиву
const companies = [2, 5, 456, 567, 34, 24, 35, 94, 67];
console.log(Math.max(...companies));
//result -> 567

//Використовуючи spreat operator ми можемо працювати з об'єктами теж, наприклад об'єднати два об'єкти:
const obj1 = {
  firstName: 'Andrew'
  lastName: 'Alekseev'
};

const obj2 = {
  age: '28'
  gender: 'female'
};

//для цього створюємо новий об'єкт 
const person = {...obj1, ...obj2}
console.log(person);
//result -> {firstName: 'Andrew', lastName: 'Alekseev', age: '28', gender: 'female'}


//example callback using map
function multiplyByTwo(num) {
  return num * 2
}

[1, 2, 3].map(multiplyByTwo);