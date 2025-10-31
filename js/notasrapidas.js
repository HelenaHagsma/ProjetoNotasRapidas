function adicionar(){

    var n = document.getElementById("nota").value.trim()
    var urgente = document.getElementById("urgente")
    var naourgente = document.getElementById("naourgente")
    var espacoNU = document.getElementById("espacoNU")
    var espacoNNU = document.getElementById("espacoNNU")

    if(urgente.checked==true && naourgente.checked==false){
        var li = document.createElement("li");
        li.textContent = n;
        li.style.color="#ffffff"
        
    }

    if(naourgente.checked==true && urgente.checked==false){
        var li = document.createElement("li");
    li.textContent = n;

    }

    if(n==""){
        alert("O campo não pode ficar vazio!")
        return;
    }

   if (urgente.checked==true && naourgente.checked==true) {
        alert("Escolha apenas uma das opções!");
        return;
    }

    else if(urgente.checked==false && naourgente.checked==false){
        alert("Você precisa marcar ao menos uma opção!")
        return;
    }

    // Adiciona na lista correspondente sem substituir
    if (urgente.checked===true) {
        espacoNU.appendChild(li);
    } else if (naourgente.checked===true) {
        espacoNNU.appendChild(li);
    }

    // Limpa o campo e desmarca os checkboxes
    document.getElementById("nota").value = "";
    urgente.checked = false;
    naourgente.checked = false;
}