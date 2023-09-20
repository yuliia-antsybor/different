$('#main-heading').text('Hello World!');
//зміна заголовку через JQ.

$("#main-heading");

for (let i = 0; i < 2; i++) {
let yourInput = prompt("Enter your name");
$("body").append("<p>" + yourInput + "</p>");
}

$("h1").fadeOut(1000);