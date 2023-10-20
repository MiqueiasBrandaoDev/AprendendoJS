let seletor = {
    onload: function(){
        //SÓ EXECUTA QUANDO A PAGE ESTÁ TOTALMENTE CARREGADA
        window.onload = function(){
            console.log("Página 100% carregada")
        }
        console.log("Página 100% carregada-fora do onload")
    },

    addEventListener: function(){
        //CAPTURA UM EVENTO DE CLICK DO USUÁRIO PARA DETERMINADO ELEMENTO
        let bodyEvent = document.querySelector("#btn")

        //MUDANDO COR DO BOTAO APOS A CAPTURA DO CLICK
        bodyEvent.addEventListener("click", function(){//eventos após o click
            console.log("Clicou no botão")
            this.style.backgroundColor = "blue"
        })

        //REMOVENDO SUBTITLE SE CLICAR 2 VEZES NO TITULO
        let titleElement = document.querySelector("#title")
        titleElement.addEventListener("dblclick", function(){
            document.querySelector("#subtitle").style.display = "none"
        })

        //ADICIONANDO MENSAGEM PRA - NÃO SAIR
        let tagHtml = document.querySelector("#title")
        tagHtml.addEventListener("mouseover", function(){
            document.querySelector("#title").innerHTML = "Não saia, temos um desconto de 90% para você!"
        })
    }

}

seletor.addEventListener()