//criando uma promessa
const minhaPromisse = new Promise((resolve, reject) => {
    
    // imagine que esse nome veio de uma requisição externa
    const nome = "Miqueias"

    //condição se resolve
    if(nome == "Miqueias"){
        resolve("Response 200")
    }

    //condição se reject
    else{
        reject("Error 404")
    }
})

//recebendo os dados para tratar
minhaPromisse
.then((data) => {return data.toLowerCase()})//then resolve - retorna o dado e trata
.then((data) => {console.log("A resposta da requisição é: " + data)})//encadeamento de then - a resposta do then anterior
.catch((err) => {console.log("Aconteceu um erro - " + err)})//then reject
.finally(() => {console.log("Promisa finalizada")})//executa independente de reject ou resolve