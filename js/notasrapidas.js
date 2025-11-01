function adicionar(){ /*adicionar nota */

    var n = document.getElementById("nota").value.trim() /*.value pega o valor inserido */
    var urgente = document.getElementById("urgente")
    var naourgente = document.getElementById("naourgente")
    var espacoNU = document.getElementById("espacoNU")
    var espacoNNU = document.getElementById("espacoNNU")

    /*verificações---------------------------*/
    if(n=="" || n==null){
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
    /*---------------------------------------- */

if(urgente.checked==true && naourgente.checked==false){
        var li = document.createElement("li");
        li.textContent = n; /*conteúdo da li será a próxima nota do usuário */
        li.style.color="#ffffff" /*Visivelmente agradável no campo vermelho */
    }

    if(naourgente.checked==true && urgente.checked==false){
        var li = document.createElement("li");
        li.textContent = n;
    }    
    /*adiciona na lista correspondente sem substituir valor*/
    if (urgente.checked===true) {
        espacoNU.appendChild(li);
    }
    else if (naourgente.checked===true) {
        espacoNNU.appendChild(li);
    }

    /*Limpa o campo e desmarca os checkboxes*/
    document.getElementById("nota").value = "";
    urgente.checked = false;
    naourgente.checked = false;

    /*riscar nota ao clicar*/
    li.onclick = function(){
        li.classList.toggle("riscado") /*comandos no css */
    }
}  /*fim da função adicionar() */


function apagarTodas(listaNotas) {
    var lista = document.getElementById(listaNotas);
    lista.innerHTML = "";
}