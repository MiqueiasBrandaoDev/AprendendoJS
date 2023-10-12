document.write("<h1>Aprendendo JavaScript</h1>")
document.write("<hr>")
document.write("<pre>")

// Manipulando Array
let arr = [
    1,
    'miqueias',
    27,
]

document.write("Manipulando Array <br><br>")
document.write(arr)

document.write("<hr>")


// Manipulando Objeto
let obj = {
    id:1,
    nome:"miqueias",
    idade:27
}


document.write("Manipulando Objeto <br><br>")
document.write(obj["nome"])

console.log(obj)

document.write("<hr>")


// Aplicando condiçoes
let janelaFechada = true

document.write("Aplicando condiçoes <br><br>")
if (janelaFechada == true) {
    document.write("O ar condicionado pode ser usado.")
}
else if(janelaFechada == false){
    document.write("O ar condicionado NÃO pode ser usado.")
}
else{
    document.write("O valor da variável - janelaFechada está incorreto")
}

document.write("<hr>")


let numero = 5

if (numero === 5) {
    document.write('Tipo de dados diferentes')    
}
else{
    document.write('Tipo de dados iguais')
}
document.write("<hr>")



// Estrutura de Repetição
document.write("Estrutura de Repetição<br><br>While")
let rep = 10

while(rep >= 0){
    document.write("<br>" + "O valor da variável é:" + rep)
    rep -= 1 
}

//Replicar While para for
document.write('<br><br>Replicar While para for:')
for (let rep = 10; rep >= 0; rep -= 1) {//inicializa a variavel;Aplica a condição para a execução; Encremento para a logica
    
    if (rep == 5) {
        break
    }
    document.write("<br>" + "O valor da variável é:" + rep)
}




document.write("</pre>")