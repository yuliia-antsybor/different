//мудулі, які нам щось повертають, наприклад 'os', 'http', 'path' 'fs'...etc
const os = require('os'); //повертає нам об'єкт модуля
const fs = require('fs');

// let = 6;
// a += 6;
// console.log("value =", a);

// console.log(os.type());
// console.log(os.arch());

//Створим файл і запишем дані в нього (my_file.txt в папці NodeJs)
fs.writeFile('my_file.txt',"Hello there", function(err) {
  if(err)console.log(err.message);
  console.log('Saved!');
})
//..методом append можна дописати дані в файл, бо writeFile перепишу, read,який зчитує дані з файла тощо
//можна видаляти ще, перейменовувати тощо




