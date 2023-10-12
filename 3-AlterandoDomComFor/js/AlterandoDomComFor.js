let carros = ["Elantra", "Sonata", "Gol", "Palio", "Tesla"]//criando lista
let listaHtml = document.createElement("ul")//criando elemento UL - lista não ordenada
let lista = document.getElementById("lista")//obtendo elemento por id - lista

lista.appendChild(listaHtml)//coloca listaHtml dentro do lista

//cria a variavel de controle; se variável de controle for menor que o numero de indices; Incrementa a variárel
for(let i=0; i < carros.length; i++){
    var criaLista = document.createElement("li") //cria elemento - li
    var itemListaTexto = document.createTextNode(carros[i]) //insere em texto na tag o nome do item da lista carros
    criaLista.appendChild(itemListaTexto) //coloca o texto dentro da linha da lista - li
    listaHtml.appendChild(criaLista) //coloca criaLista dentro do LU - lista no HTML
}