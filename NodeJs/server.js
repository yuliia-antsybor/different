//мудулі, які нам щось повертають, наприклад 'os', 'http', 'path' 'fs'...etc
const os = require('os'); //повертає нам об'єкт модуля
const fs = require('fs');

// let = 6;
// a += 6;
// console.log("value =", a);

// console.log(os.type());
// console.log(os.arch());

//запишем дані в файл
fs.writeFile('my_file.txt',"Hello there", function(err) {
  if(err)console.log(err.message);
  console.log('Saved!');
})