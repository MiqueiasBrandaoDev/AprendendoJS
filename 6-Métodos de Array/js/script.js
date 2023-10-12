//length - obtem o numero de indices
let arr = [1,2,3,4,5,6,7,8,9,10]

//push - adiciona um objeto ao final
arr.push("adição de objeto")

//pop - remove o ultimo item
arr.pop()

//unshift - adiciona um item na primeira posição
arr.unshift(0)

//shift - remove o item da primeira posição
arr.shift(0)

//splice - adiciona um elemento em qualquer posição sintaxe (indice, qual indice remover, dado a inserir)
arr.splice(0, 0, 999)
arr.splice(0, 1)//também remove um indice indicado, indice 0 1 posição

//encontra o indice de um elemento - o parâmetro é o value do indice
arr.indexOf(5)

//join - transforma em uma string - o parâmetro é o dividor por indice
arr.join(", ")

//reverse - inverte os elementos de ordem ultimos ficam em primeiro
arr.reverse()