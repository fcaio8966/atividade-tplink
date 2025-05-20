var botaoEntrar = document.getElementById("button-submit")

function login (){
    var campoEmail = document.getElementById("usuario").value
    var campoSenha = document.getElementById("senha").value
    var campoCodigo = document.getElementById("codigo").value
    if( campoEmail == "admin" && campoSenha=="1234" && campoCodigo == "tplink2025"){
        window.location.replace("painel.html.")
    } else {
        console.log("Ops! Você errou e-mail e senha")
    }
        
    console.log("entrou na função login")
} 

botaoEntrar.addEventListener("click",login)