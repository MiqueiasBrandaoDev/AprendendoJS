function carregando(){
    
    document.querySelector("#loading").classList.remove("invisible")
    document.querySelector("#btn-login").classList.remove("btn-primary")
    document.querySelector("#btn-login").classList.add("btn-warning")
    
    setTimeout(() => {
        
        document.querySelector("#btn-login").classList.remove("btn-warning")
        document.querySelector("#btn-login").classList.add("btn-success")
        document.querySelector("#btn-login").textContent = "LOGIN SUCEDIDO"
        document.querySelector("#loading").classList.remove("spinner-border-sm")
        document.querySelector("#loading").classList.remove("spinner-border")
        document.querySelector("#loading").classList.add("bi")
        document.querySelector("#loading").classList.add("bi-check-circle-fill")


    }, 2000);
 
}