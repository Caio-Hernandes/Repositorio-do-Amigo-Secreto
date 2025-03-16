//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value;

    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    amigos.push(nome); //coloca o nome no array

    atualizarLista(); //chama a função pra atualizar a lista
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(nome => {
        let item = document.createElement("li");
        item.innerText = nome;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear!");
        return;
    }

    let sorteio = [...amigos];
    let resultado = [];
    
    do {
        resultado = embaralharLista([...sorteio]);
    } while (temAlguemSorteandoASiMesmo(amigos, resultado));

    exibirResultado(resultado);
}

function embaralharLista(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [lista[i], lista[j]] = [lista[j], lista[i]]; // Trocar as posições
    }
    return lista;
}

function temAlguemSorteandoASiMesmo(original, sorteado) {
    return original.some((nome, index) => nome === sorteado[index]);//garantir que ninguem sorteie a si mesmo
}

function exibirResultado(sorteio) {
    let listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.innerText = `${amigos[i]} → ${sorteio[i]}`; //loop pra colocar os nomes na lista
        listaResultado.appendChild(item); 
    }
}
function reiniciarJogo() {
    amigos = []; // Limpa a lista de amigos
    resultado = []; // Limpa os resultados do sorteio
    atualizarLista(); // Atualiza a lista de amigos na tela
    document.getElementById("resultado").innerHTML = ""; // Limpa o resultado
    document.getElementById("amigo").value= "";// Limpa o input de amigos
}
