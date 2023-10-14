//inserindo retardo
let retardo = setTimeout(function() {
    document.write("<strong>Testando o setTimeout</strong><br>")
}, 10000);  
clearTimeout(retardo)


//inserindo intervalo em requisições diretas
let intervaloProgramado = setInterval(() => {
    document.write("Testando o setInterval<br>")
}, 100);


//travando o intervalo
setTimeout(() => {
    clearInterval(intervaloProgramado)
}, 200);