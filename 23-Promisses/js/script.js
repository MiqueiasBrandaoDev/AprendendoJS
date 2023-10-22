let minhaPromessa = new Promise((resolve, reject) =>{
    let name = "Miqueias"
    let idade = 27
    if(name == "Miqueias" && idade == 27){
        resolve("Usuário " + name + " encontrado")
    }
    else{
        reject("O usuário não foi encontrado")
    }

})

minhaPromessa.then(function(resolve){
    console.log(resolve)
}).catch((erro)=> {
    console.log(erro)
})