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


//resolvendo todas as promessas com resolveAll e race
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const dataApi = "Resolve p1 com dataApi"
        resolve(dataApi)
    }, 2000);
})

const p2 = new Promise((resolve, reject) => {
    const dataApi = "Resolve p2 com dataApi"
    resolve(dataApi)
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const dataApi = "Resolve p3 com dataApi"
        resolve(dataApi)
    }, 3000);
})

//o método aguarda todas as promises para retornar resolve ou reject
Promise.all([p1, p2, p3]).then((data) => {console.log("Resolvida com .all: " + data)})

//o método retorna a primeira promise que foi resolvida
Promise.race([p1, p2, p3]).then((data) => {console.log("Resolvida com race: " + data)})


//fazendo chamada para api - Clickup
const listId = "901300786809"
fetch(`https://api.clickup.com/api/v2/list/${listId}/task`, {
    method: "GET",
    headers: {
        Authorization: "pk_60974423_PV4JQZNDLWV8S7E98H5D3R22XOZ2JTEL"
    }
})
    .then((response) => {
        return response.json()
    })
    .then((dataJson) => {
        console.log(dataJson)
    })