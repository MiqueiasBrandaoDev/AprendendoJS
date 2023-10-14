//function que será chamada dentro de outra function
function exibirText(n){
    document.write("O resultado da operação é: " + n + "<br>")
}

//o 3º parâmetro é uma função para executar dentro desta function
function soma(a, b, callback){
    let n = a + b
    callback(n)//passa a quantidade de parâmetro da função incremental
}
function mult(a, b, callback){
    let n = a * b
    callback(n)//passa a quantidade de parâmetro da função incremental
}


soma(5,5, exibirText)
mult(5,5, exibirText)