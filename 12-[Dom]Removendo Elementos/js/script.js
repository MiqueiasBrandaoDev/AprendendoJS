//Removendo um elemento filho - seleciona o elemento pai, seta o elemento que deve ser removido
//método simplificado
let elementoPai = document.querySelector("body")
let elementoFilhoRemover = document.querySelector("h1")
elementoPai.removeChild(elementoFilhoRemover)

//método abreviado
document.querySelector("body").removeChild(document.querySelector("p"))


//Removendo um elemento - independente
document.querySelector("h2").remove()