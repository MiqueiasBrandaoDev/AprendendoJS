let pessoa = {
    nome: ["Miqueias", "Samuel", "Pedro"],
    exibirNome: function(id){
        document.write("O nome do usuário é: " + this.nome[id] +"<br>")
    },
    saudacao:function(i){
        document.write("Olá Sr. " + this.nome[i])
    }
}

pessoa.exibirNome(2)
pessoa.saudacao(0)