//diferença entre const,var e let
//declaração de variável com var e let
//declaração de constantes com const. Aqui o valor nunca será alterado
//a declaração com var tem escopo(visibilidade) fora da estrutura
//declarar com let tem escopo(visibilidade) local,ou seja, dentro da estrutura
var nome= "Helena";
let sobrenome= "Santos"

console.log(nome,sobrenome);

if(nome=="Helena"){
    var dados="É uma pessoa de idade 35 anos";
    let mais ="e também trabalha com vendas";
}
console.log( dados)

const texto = "Mensagem";
console.log("O valor da constante é "+texto);
console.log(texto.toLocaleUpperCase());