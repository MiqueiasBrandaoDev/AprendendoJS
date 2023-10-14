//obtendo elemento pai
let element = document.querySelector(".content")
var pai = element.parentNode

//criando novo elemento
let create = document.createElement("h1")
let createText = document.createTextNode("Este é o novo elemento")
create.appendChild(createText)

//substituindo os elementos - Precisa ser com o elemento pai(linha 2)
pai.replaceChild(create, element)