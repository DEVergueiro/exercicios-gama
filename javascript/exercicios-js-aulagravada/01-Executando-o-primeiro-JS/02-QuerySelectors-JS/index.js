// // Pega os elementos por ID
// console.log(document.getElementById("primeiroh1").innerText);
// console.log(document.getElementById("primeiroh2").innerText);

// // Pega os elementos por Tag Name
// console.log(document.getElementsByTagName("h1"));

// // Pega os elementos por Class Name
// console.log(document.getElementsByClassName("primeiro-h1"));

// console.log(document.querySelector("segundoh1").innerHTML);

let umNovoElemento = document.createElement("p");

let paragrafo = document.querySelector("div div p");
let elementoPai = document.querySelector("div")

elementoPai.insertBefore(umNovoElemento, paragrafo);
