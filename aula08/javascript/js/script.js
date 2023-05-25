// let valor= 0;
// valor = prompt("Digite um número");
// // if(valor % 2 == 0){
// //     alert("O número digitado é Par");
// // }
// // else{
// //     alert("O número digitdo é Impar");
// // }

// // let rs =valor % 2==0 ? "O número digitado é Par" : "O número digitado é Impar";
// // alert(rs);
//Lista de produtos
let produtos= ["Mouse","Teclado","Sofá","Monitor"];

console.log(produtos[1].toUpperCase());

//adicionar um produto
produtos.push("Cadeira Gamer");

for(let i= 0 ; i < produtos.length ; i++){
    console.log("Produto"+(i+1)+": "+produtos[i]);
}

produtos.pop() //Remova o último item
for(let i of produtos){
    console.log(i);
}

let dados= prompt("Digite produtos separados por virgula");

//vamos usar um comando chamado split que permite quebrar uma
//string a partir de um caracter separador e transformá-la em
//um array
const lista = dados.split(',');
for(let pr of lista){
    console.log(pr);
}