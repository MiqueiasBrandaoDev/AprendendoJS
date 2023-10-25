//Alguma função genérica a ser executada em alguma momento - Promise
let primeiraFuncao = function(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Dentro da Promise")
            resolve()
        }, 1000);
    })
}
//espera todo o fluxo ser executado
async function segundaFuncao(){
    console.log("Iniciou")
    await primeiraFuncao()//só executa na sequência correta se usar async await
    console.log("Terminou")
}

segundaFuncao()


function getTasks(listId){

    //chamada a API CLICKUP
    return fetch(`https://api.clickup.com/api/v2/list/${listId}/task`, {
        method: "GET",
        headers: {
            Authorization: "pk_60974423_PV4JQZNDLWV8S7E98H5D3R22XOZ2JTEL"
        }
    })
    .then(dataApi => dataApi.json())
    .then((dataApiJson) => {console.log(dataApiJson)})
    .catch((err) => {console.log("Ocorreu um erro: " + err)})
}

async function mostraDados(listId){
    try {
        console.log('O nome do usuário é Miqueias')
        console.log('Abaixo estão as tarefas cadastradas:')
        const data = await getTasks(listId) //chamada API
        
    } catch (error) {
        console.error(`Ocorreu um erro: ${error}`)
    }
}

mostraDados(901300786809)