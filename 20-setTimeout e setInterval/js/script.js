//inserindo retardo
setTimeout(function() {
    document.write("<strong>Testando o setTimeout</strong><br>")
}, 4000);


//inserindo intervalo em requisições diretas
setInterval(() => {
    document.write("Testando o setInterval<br>")
}, 1000);