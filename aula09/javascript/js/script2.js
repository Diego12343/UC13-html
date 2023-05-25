const somavalores = function(){
    let v1 = prompt("Digite um valor");
    let v2 = prompt("Digite outro valor");
    v1 = parseInt(v1);
    v2 = parseInt(v2);


    console.log(v1+v2);
    alert(v1+v2);
}

const media = function(arrayNumerico, tamanhoArray){
    let rs = 0;
    for(let i = 0 ; i < tamanhoArray ; i++){
        rs += arrayNumerico[i];
    }
    return rs/tamanhoArray;
}





//referenciar o body da página
const body = document.body;

//Vamos criar um controle html usando javascript
//este controle só existirá em tempo de execução,
//ou seja, somente quando a página estiver rodando
//usaremos o comando createElement
const btn4 = document.createElement("button");
const btn5 = document.createElement("button");

//adicionar o atributo id ao botão criado
btn4.setAttribute("id","btn4");
btn5.setAttribute("id","btn5");
//adicionar um texto ao botão
btn4.innerHTML="botão4";
btn5.innerHTML="botão5";
btn4.onclick = somavalores;
let ar = [10,20,5,9,12];
btn5.onclick = function(){
   alert(media(ar,ar.length));
}

//adicionar o botão 4 ao corpo da página(body)
//utilizaremos o comando appendChild(adiciona)
body.appendChild(btn4);
body.appendChild(btn5);
