let titulo = document.querySelector("h1")

let seletorTitle = {
    innerHTML: function(){
        //innerHTML - Altera o texto do HTML(método defasado)
        titulo.innerHTML = ("Titulo alterado com innerHTML")
    },

    textContent: function(){
        //textContent - Altera o texto do HTML(método recomendado)
        titulo.textContent = "Titulo alterado com textContent"
    }
}

seletorTitle.textContent()