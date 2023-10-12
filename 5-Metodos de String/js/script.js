//length - Define index do objeto(caracteres, numeros de objetos de uma lista, etc)
document.write("teste".length)
let lista = ["amarelo", "vermelho", "azul"]

//indexOf - Pesquisa de uma palavra, o metodo retorna qual caractere começa a palavra
let frase = "Estou estudando JavaScript"
let palavra = frase.indexOf("estudando")

//slice - palavra com inicio e termino
palavra = frase.slice(palavra, 15)

//replace - Substitui uma palavra
let novaFrase = frase.replace("estudando", "testando")
document.write(novaFrase)