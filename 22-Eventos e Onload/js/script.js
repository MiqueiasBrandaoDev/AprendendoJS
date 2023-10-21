let seletor = {

    //SÓ EXECUTA QUANDO A PAGE ESTÁ TOTALMENTE CARREGADA
    onload: function(){
        window.onload = function(){
            console.log("Página 100% carregada")
        }
        console.log("Página 100% carregada-fora do onload")
    },

    //CAPTURA UM EVENTO DO USUÁRIO PARA DETERMINADO ELEMENTO
    addEventListener: function(){
        let bodyEvent = document.querySelector("#btn")

        //CAPTURA O EVENTO "click" DO MOUSE PARA EXECUTAR ALGO
        bodyEvent.addEventListener("click", function(){//eventos após o click
            console.log("Clicou no botão")
            this.style.backgroundColor = "blue"
            document.querySelector("body").style.backgroundColor = "#ffff"
        })

        //CAPTURA O EVENTO "dblclick"(2 cliques) DO MOUSE PARA EXECUTAR ALGO
        let titleElement = document.querySelector("#title")
        titleElement.addEventListener("dblclick", function(){
            document.querySelector("#subtitle").style.display = "none"
        })

        //resetando estilos do body e btn quando 2 clicks no body
        document.querySelector("body").addEventListener("dblclick", function(){
            this.style.backgroundColor = "#fff"
            document.querySelector("#btn").style.backgroundColor = "#fff"
        })

        //CAPTURA O EVENTO "mouseover" IDENTICO AO HOVER DO MOUSE PARA EXECUTAR ALGO
        let tagHtml = document.querySelector("#title")
        tagHtml.addEventListener("mouseover", function(){
            document.querySelector("#title").innerHTML = "Não saia, temos um desconto de 90% para você!"
        })

        //CAPTURA O EVENTO "mouseout" IDENTICO AO HOVER DO MOUSE PARA EXECUTAR ALGO
        let mouseout = document.querySelector("#title")
        mouseout.addEventListener("mouseout", function(){
            document.querySelector("#title").innerHTML = "Aqui está o título"
        })

        //CAPTURAR EVENTO DO TECLADO "keydown" PARA EXECUTAR ALGO
        document.addEventListener("keydown", function(key){

            if(key.key == "Enter"){
                document.querySelector("body").style.backgroundColor = "blue"
                document.querySelector("#btn").style.backgroundColor = "#fff"
            }
        })

        //CAPTURAR EVENTO DO TECLADO "keyup" - CAPTURA O EVENTO QUANDO SOLTA O BOTÃO
        document.addEventListener("keyup", function(key){

            if(key.key == "Enter"){
                console.log("Soltou o enter")
            }
        })
    }

}

seletor.addEventListener()