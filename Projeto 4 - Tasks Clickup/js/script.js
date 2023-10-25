const tokenApiClickp = "pk_60974423_PV4JQZNDLWV8S7E98H5D3R22XOZ2JTEL"

//obtendo usuário
async function getUser(){
 
    const listId = "901300786809"
    
     //chamada a API CLICKUP
     try {

        const dataApi = await fetch(`https://api.clickup.com/api/v2/list/${listId}/member`, {

            method: "GET",

            headers: {

                Authorization: tokenApiClickp

            }

        })
        
        return await dataApi.json()

    } catch (error) {

        console.log("Ocorreu um erro: " + error)

    }
}

//mostrar nome
async function mostraNome(){
    try {

        var mostraUser = await getUser()

        document.querySelector("#nameUser").textContent = mostraUser.members[0].username

    } catch (error) {

        console.log(error)

    }
}

mostraNome()



//obtendo tasks
async function getTasksByList(){
 
    const listId = "901300786809"
    
     //chamada a API CLICKUP
     try {

        const dataApi = await fetch(`https://api.clickup.com/api/v2/list/${listId}/task`, {

            method: "GET",

            headers: {

                Authorization: tokenApiClickp

            }

        })
        
        return await dataApi.json()

    } catch (error) {

        console.log("Ocorreu um erro: " + error)

    }
}


//mostrar tasks
async function mostraTaks(){

    try {

        var mostraTaks = await getTasksByList()

        mostraTaks.tasks.forEach(data => {

            const template = document.querySelector(".template")

            const newTemplate = template.cloneNode(true)

            newTemplate.querySelector("#title").textContent = data.name//inserindo titulo

            newTemplate.querySelector("#description").textContent = data.description//inserindo descrição

            newTemplate.classList.remove("template")

            newTemplate.classList.remove("hide")

            document.querySelector("#tasks").appendChild(newTemplate)

            console.log(newTemplate)

        });

    } catch (error) {

        console.log(error)

    }
}

mostraTaks()

