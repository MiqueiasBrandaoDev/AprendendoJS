let body = document.querySelector("body")//obtendo elemento body 

//criando elemento titulo e inserindo conteúdo
let titulo = document.createElement("h1")
let tituloText = document.createTextNode("Aqui está o titulo")
body.appendChild(titulo)//incluindo elemento criado dentro do body
titulo.appendChild(tituloText)//incluindo texto dentro do h1


//criando elemento paragrafo e inserindo conteúdo
let paragrafo = document.createElement("p")
let paragrafoText = document.createTextNode("Aqui está o parágrafo")
body.appendChild(paragrafo)
paragrafo.appendChild(paragrafoText)