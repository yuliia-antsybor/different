// 1.
// На основі AJAX технології напишіть клієнтську частину аплікації (HTML+JavaScript),
//  в якій при натисненні на кнопку надсилається асинхронний GET-запит на сервер, сервер обробляє запит 
//  і надсилає його на HTML-сторінку оновлюючи вміст кнопки так як показано в прикладі.
// in progress

//  2.
//  На основі AJAX технології напишіть клієнтську частину аплікації (HTML+JavaScript),
//  в якій при натисненні на кнопку надсилається асинхронний GET-запит на сервер, завантажується файл books.json
//  і з нього виводяться всі назви авторів у вигляді списку на HTML-сторінку.
// in progress
//  3.



//  Використати сервіс: https://randomuser.me/
// Та при кожному завантаженні сторінки робити запит до API та рендерити базову інформацію про користувача
// (аватар, ім`я, вік, стать, країна, логін, пароль, пошта).

const app = document.getElementById('app');
const userApiRandom = 'https://randomuser.me/api';
const renderUserData = (user) => `
<picture>
    <source srcset="${user.picture.large}" media="(min-width: 75em)">
    <source srcset="${user.picture.medium}" media="(min-width: 40em)">
    <img src="${user.picture.thumbnail}" alt="User Picture" 
      width="auto" height="auto" loading="lazy" decoding="async">
  </picture>
  <p>Name: ${user.name.first} ${user.name.last}</p>
  <p>Age: ${user.dob.age}</p>
  <p>Gender: ${user.gender}</p>
  <p>country: ${user.location.country}</p>
  <p>login: ${user.login.username}</p>
  <p>Password: ${user.login.password}</p>
  <p>Email: ${user.email}</p>
  

`

fetch(userApiRandom)
  .then(res => res.json())
  .then(data => {
    const user = data.results[0];
    app.innerHTML = renderUserData(user);
  });

