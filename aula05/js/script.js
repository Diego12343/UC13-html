//fazer referência aos controles html do formulário
const btn = document.getElementById("btnLogin");
const txtuser = document.getElementById("txtuser");
const txtpass = document.getElementById("txtpass");
let autenticado;
let token;
let key;

btn.onclick = () => {
    //validação dos campos usuario e senha
    if (txtuser.value.trim() == "" || txtpass.value.trim() == "") {
        return alert("Nome de usuário ou senha obrigatório");
    }
    else {
        /*
        Vamos usar o comando fetch(buscar) para fazer uma 
        requisão a nossa API e, realizar o login. Passaremos
        o nome de usuário e senha.
        */
        fetch("http://127.0.0.1:30021/users/login", {
            method: "POST",
            headers: {
                "accept": "application/json",
                "content-type": "application/json"
            },
            body: JSON.stringify({
                nomeusuario: txtuser.value,
                senha: txtpass.value
            })
        }).then((response) => response.json())
            .then((dado) => {
                if (dado.output == "Authenticated") {
                    autenticado = true;
                    token = dado.token;
                    txtuser.value = "";
                    txtpass.value = "";
                    window.location.href="list.html?key=$"
                }
                else {
                    txtuser.value = "";
                    txtpass.value = "";
                    return alert("Usuário ou Senha incorreto");
                }
            }).catch((error) => console.error(`Não foi possível requisitar a API -> ${error}`))
    }
}


document.getElementById("registro").onclick = () => {
    document.getElementById("shadow").style.zIndex = "100";
    document.getElementById("shadow").style.opacity = "1";
}

document.getElementById("fechar").onclick = () => {
    document.getElementById("shadow").style.zIndex = "-100";
    document.getElementById("shadow").style.opacity = "0";

}

//Script para cadastrar um novo usuário no banco de dados
const btncad = document.getElementById("btncadastrar");
const txtusuario = document.getElementById("txtusuario");
const txtsenha = document.getElementById("txtsenha");
const txtemail = document.getElementById("txtemail");
const txtfoto = document.getElementById("txtfoto");

btncad.onclick = () => {
    // if (txtusuario.value.trim() == "" || txtsenha.value.trim() == "" || txtemail.value.trim() == "") {
    //     return alert("Todos os campos devem ser preenchidos")
    // }
    // else {
    fetch("http://127.0.0.1:30021/users/insert", {
        method: "POST",
        headers: {
            "accept": "application/json",
            "content-type": "application/json"
        },
        body: JSON.stringify({
            nomeusuario: txtusuario.value,
            senha: txtsenha.value,
            email: txtemail.value,
            foto: txtfoto.value
        })
    }).then((response) => response.json())
        .then((result) => {
            if (result.output == "Inserted") {
                alert("Usuário cadastrado com sucesso!");
                txtusuario.value = "";
                txtsenha.value = "";
                txtemail.value = "";
                txtfoto.value = "";
                document.getElementById("shadow").style.zIndex = "-100";
                document.getElementById("shadow").style.opacity = "0";
            }
            else {
                alert("Não foui possível cadastrar, Tente outra vez");
            }
        })
        .catch((error) => console.error(`Erro ao cadastrar->${error}`))
    // }
}

function carregarDados() {
    key= window.location.search.substring(5,window.location.search.length)
    const estrutura = document.getElementById("estrutura");
    fetch("http://127.0.0.1:30021/users/list")
        .then((response) => response.json())
        .then((result) => {
            result.data.map((item, index) => {
                let div_user = document.createElement("div");
                div_user.setAttribute("class", "div_user");
                div_user.innerHTML = `
            <img src="img/avatar.png">
            <h2>${item.nomeusuario}</h2>
            <h3>${item.email}</h3>
            <a href="#" onclick="editar('${item.idusuario}','${item.nomeusuario}','${item.email}','${item.foto}')">
                <img src="img/botaoeditar.png">
            </a>
        `;
                estrutura.appendChild(div_user);
            })
        }).catch((error) => console.log(`Erro ao executar a API -> ${error}`))
}

function editar(id, usuario, email, foto) {

    //fazer uma referência ao body da página html
    const body = document.body;
    const div_shadow = document.createElement("div");
    const div_white = document.createElement("div");
    const form = document.createElement("form");
    const input_id = document.createElement("input");
    const input_user = document.createElement("input");
    const input_pass = document.createElement("input");
    const input_confirm = document.createElement("input");
    const input_email = document.createElement("input");
    const input_file = document.createElement("input");
    const input_sub = document.createElement("input");

    //Aplicar atributos ao elementos
    div_shadow.setAttribute("id", "div_shadow");

    div_white.setAttribute("id", "div_white");
    //Atributo para não enviar o formulário. O envio será feito via javascript.
    form.setAttribute("onsubmit", "return false;")

    //Aplicar os atributos ao id: type, placeholder, disabled
    input_id.setAttribute("type", "text");
    input_id.setAttribute("placeholder", `Id Usuário ${id}`);
    input_id.setAttribute("disabled", "true");

    //Aplicar os atributos ao id: type, placeholder, disabled
    input_user.setAttribute("type", "text");
    input_user.setAttribute("placeholder", `Usuário ${usuario}`);
    input_user.setAttribute("disabled", "true");

    //aplicar os atributos a senha e a confirmação
    input_pass.setAttribute("type", "password");
    input_pass.setAttribute("placeholder", "Senha");

    input_confirm.setAttribute("type", "password");
    input_confirm.setAttribute("placeholder", "Confirme a senha");

    //aplicar os atributos ao controle file: type, placeholder
    input_email.setAttribute("type", "email");
    input_email.setAttribute("placeholder", `${email}`);

    //aplicar os atributos ao controle file: type,value
    input_file.setAttribute("type", "file");
    input_file.setAttribute("value", `${foto}`);

    //aplicar atributos ao controle submit:type, value
    input_sub.setAttribute("type", "submit");
    input_sub.setAttribute("value", "atualizar");

    input_sub.onclick = ()=>{
        if(input_confirm.value != input_pass.value){
            return alert("Senha de confirmação incorreta");
        }
        else{
            fetch(`http://127.0.0.1:30021/users/update/${id}`{
                method:"PUT",
                headers:{
                    "accept":"aplication/json",
                    "content-type":"aplication/json",
                    "token":key
                },
                body:JSONl.stringify({
                    senha:input_pass.value,
                    email:input
                })
            })
        }
    }



    form.appendChild(input_id);
    form.appendChild(input_user);
    form.appendChild(input_pass);
    form.appendChild(input_confirm);
    form.appendChild(input_email);
    form.appendChild(input_file);
    form.appendChild(input_sub);

    div_white.appendChild(form);

    div_shadow.appendChild(div_white);
    body.appendChild(div_shadow);

}
