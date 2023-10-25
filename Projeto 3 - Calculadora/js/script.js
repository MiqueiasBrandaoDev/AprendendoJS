//reset do input
function reset(){
    document.querySelector("#display").value = ""
}

//capturar click dos botoes
function clicareMostrarDisplay(a){
    console.log(a)
    const valorClicado = a
    const valorAntigo = document.querySelector("#display").value
    const display = document.querySelector("#display")
    display.value = valorAntigo + valorClicado
}

//clicando no ponto
function clickPonto(){
    const valorAntigo = document.querySelector("#display").value
    const display = document.querySelector("#display")
    display.value = valorAntigo + '.'
}

//função para converter string e 2 numeros
function stringToNumber(a, b){

}

//operação divisão
function divisao(){
    result()
    const valorAntigo = document.querySelector("#display").value
    const display = document.querySelector("#display")
    display.value = valorAntigo + '/'
}

//operação multiplicação
function mutiplicacao(){
    result()
    const valorAntigo = document.querySelector("#display").value
    const display = document.querySelector("#display")
    display.value = valorAntigo + '*'
}

//operação subtrair
function subtracao(){
    result()
    const valorAntigo = document.querySelector("#display").value
    const display = document.querySelector("#display")
    display.value = valorAntigo + '-'
}

//operação adição
function adicao(){
    result()
    const valorAntigo = document.querySelector("#display").value
    const display = document.querySelector("#display")
    display.value = valorAntigo + '+'
}

//result
function result(){
    console.log("Começando o Result()")
    const valor = document.querySelector("#display").value

    if(valor.includes("+")){
        console.log("O operador é de Adição")
        const number = valor.split("+")
        const n1 = parseFloat(number[0])
        const n2 = parseFloat(number[1])
        const done = n1+n2
        console.log(done)
        document.querySelector("#display").value = done
    }

    if(valor.includes("-")){
        console.log("O operador é de Substituição")
        const number = valor.split("-")
        const n1 = parseFloat(number[0])
        const n2 = parseFloat(number[1])
        const done = n1-n2
        console.log(done)
        document.querySelector("#display").value = done
    }

    if(valor.includes("*")){
        console.log("O operador é de Multiplicação")
        const number = valor.split("*")
        const n1 = parseFloat(number[0])
        const n2 = parseFloat(number[1])
        const done = n1*n2
        console.log(done)
        document.querySelector("#display").value = done
    }

    if(valor.includes("/")){
        console.log("O operador é de Divisão")
        const number = valor.split("/")
        const n1 = parseFloat(number[0])
        const n2 = parseFloat(number[1])
        const done = n1/n2
        console.log(done)
        document.querySelector("#display").value = done
    }
}

//mapendo teclas do teclado
//enter
document.addEventListener("keyup", function(key){
    if(key.key == "Enter")
    result()
})

//esc
document.addEventListener("keyup", function(key){
    if(key.key == "Escape")
    reset()
})