function adicionar(){

    var n
    n=document.getElementById("nota").value

    if(urgente.checked==true && naourgente.checked==false){
        document.getElementById("NU").innerHTML=`${n}`
    }

    if(naourgente.checked==true && urgente.checked==false){
        document.getElementById("NNU").innerHTML=`${n}`
    }

    if(n==""){
        alert("O campo não pode ficar vazio!")
    }

   if (urgente.checked==true && naourgente.checked==true) {
        alert("Escolha apenas uma das opções!");
        return;
    }

    else if(urgente.checked==false && naourgente.checked==false){
        alert("Você precisa marcar ao menos uma checkbox!")
    }




    document.getElementById("nota").value = "";
}

