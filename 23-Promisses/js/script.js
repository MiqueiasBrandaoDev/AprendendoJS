//criando uma promessa
const minhaPromisse = new Promise((resolve, reject) => {
    
    // imagine que esse nome veio de uma requisição externa
    const nome = "Miqudseias"

    //condição se resolve
    if(nome == "Miqueias"){
        resolve("Usuário encontrado " + nome)
    }

    //condição se reject
    else{
        reject("Error 404")
    }
})

//recebendo os dados para tratar
minhaPromisse
.then((data) => {return data.toLowerCase()})//then resolve - retorna o dado e trata
.then((stringModificada) => {console.log(stringModificada)})//encadeamento de thens - usa os dados do then anterior
.catch((err) => {console.log("Aconteceu um erro - " + err)})//then reject