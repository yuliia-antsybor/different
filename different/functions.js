// //приклад простої функції alert з аргументами
const userName = 'Vitaly';
const age = 20;
const gender = 'male';
function sayHello(name, age, gender) {
alert('hello' + name)
    if(age < 18) {
        alert('Yuo are too young')
    }
    if(gender === 'male') {
      alert('you rock!')
    }
}
//name = userName!

sayHello(userName, age, gender);

//приклад функції , що повертає значення
const userName = "Oleh";
function createUserName (name) {
  return name.toUpperCase();

}
const updatedName = createUserName(userName)
console.log(updatedName);


// //function expression
function sayHello(greeting) {
  alert(greeting);
}
sayHello('Ola')

//function declaration

const sayHello2 = function(greeting) {
  alert(greeting);
}
sayHello2('Chesc')

 //function as method
 const pug = {
  age: 2,
  color: 'brown',
  height: 35,
  voice: function() {
    return 'Haw haw haw'
  }
}

const sayHaw = pug.voice();
pug.voice();
'Haw haw haw'


// filter higher order functions:

//завдання: віфільтрувати масив, знайти значення start > 2000, і < 2000,результат в консоль.
const companies = [
  {name: "Companie One", category: "Finance", start: 1984, end: 2001},
  {name: "Companie Two", category: "Retail", start: 2003, end: 2020},
  {name: "Companie Three", category: "Auto", start: 1999, end: 2015},
  {name: "Companie Seven", category: "Science", start: 1999, end: 2006}
];
    

const filteredArray = companies.filter(function (item) {
  return item.start < 2000;
});
console.log(filteredArray);

const filteredArray = companies.filter(function(item){
  return item.start > 2000;
});

console.log(filteredArray);