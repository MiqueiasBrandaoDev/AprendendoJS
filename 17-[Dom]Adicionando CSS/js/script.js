//inserindo estilo no body
let body = document.querySelector("body")
body.style.backgroundColor = "#808080"
body.style.color = "#001a38"

//inserindo estilo no title
let title = document.querySelector(".title")
title.style.backgroundColor = "#ffff"

//método por meio de atributo
let desc = document.querySelector(".header")
desc.setAttribute("style", "font-size: 40px; color: #ffff; background-color: #897879;")

//metodo por cssText
let content = document.querySelector(".content")
content.style.cssText = "background-color: violet; color: #ffff"