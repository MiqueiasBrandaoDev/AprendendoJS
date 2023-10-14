let seletor = "appendChild"
//let seletor = "insertBefore"

if(seletor == "appendChild"){
    //obtendo div .container
    let container = document.querySelector(".container")

    //criando elemento e inserindo texto - parágrafo
    let p = document.createElement("p")
    let pText = document.createTextNode("Este é o paragrafo inserindo por JS")

    container.appendChild(p)//inserindo tag <p> dentro do container
    p.appendChild(pText)//inserindo texto dentro da tag <p>
}

if(seletor == "insertBefore"){
    //obtem elemento .container
    let container = document.querySelector(".container")
    container.classList = "class-teste"

    //obtendo tag script
    let script = document.querySelector("script")

    //criando elemento
    let element = document.createElement("p")
    let elementText = document.createTextNode("Este texto foi inserido com o método insertBefore")
    element.appendChild(elementText)
    container.insertBefore(element, script)
}