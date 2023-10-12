//length - Define index do objeto(caracteres, numeros de objetos de uma lista, etc)
document.write("teste".length)
let lista = ["amarelo", "vermelho", "azul"]

//indexOf - Pesquisa de uma palavra, o metodo retorna qual caractere começa a palavra
let frase = "Estou estudando JavaScript"
let palavra = frase.indexOf("estudando")
//lastIndexOf - captar a ultima palavra
let palavra2 = frase.lastIndexOf("estudando")

//slice - palavra com inicio e termino
palavra = frase.slice(palavra, 15)

//replace - Substitui uma palavra
let novaFrase = frase.replace("estudando", "testando")
document.write(novaFrase)

//toLowerCase e toUpperCase - Caixa alta e Caixa Baixa
let fraseInit = "Esta frase que vou manipular"
document.write(fraseInit.toUpperCase())//caixa alta
document.write(fraseInit.toLowerCase())//caixa baixa

//trim - aparar espaços invalidos
let testandoTrim = "Esta é uma      frase"
document.write(testandoTrim.trim())

//split - faz divisão de string por determinado caractere
let testeSplit = "Esta frase é um teste de split"
let aposSplit = testeSplit.split(" ")
console.log(aposSplit)