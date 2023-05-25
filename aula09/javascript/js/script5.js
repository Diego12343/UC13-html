let valor = prompt("Digite um valor");
valor = parseInt(valor);
const resultado = new Promise(function (resolver, reject) {
    if (valor % 2 == 0) {
        resolver("O valor é par");
    }
    else {
        reject("Não foi possível executar a sua chamada");
    }
});

const btn8 = document.createElement("button");
btn8.innerHTML = "Botão 8";
btn8.onclick = function () {
    resultado.then((x) => console.log(x)).catch((erro) => console.error(erro));
}
body.appendChild(btn8);