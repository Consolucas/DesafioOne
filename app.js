let amigos = [];

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
};

function adicionarAmigo() {
    let nome = document.querySelector('input').value;
    if(nome == ''){
        alert('Digite um nome!');
        return;
    }
    amigos.push(nome);
    console.log(amigos);
    mostrarAmigos();
    limparCampo();
};

function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpa a lista antes de adicionar os itens
    amigos.forEach(function(amigo) {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
};

function limparCampo(){
    document.querySelector('input').value = '';
};

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('A lista de amigos está vazia!');
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    
    // Esconde os elementos
    document.querySelector('.input-wrapper').style.display = 'none';
    document.querySelector('.button-container').style.display = 'none';
    document.getElementById('listaAmigos').style.display = 'none';
    
    // Exibe a mensagem com o amigo sorteado
    exibirTexto('#amigoSorteado', `Seu amigo sorteado é: ${amigoSorteado}`);
}

