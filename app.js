const listaAmigoSecreto = [];

function adicionarAmigo() {

    const nomeInput = document.querySelector('.input-name');
    const nome = nomeInput.value.trim();

    if (nome !== "") {
        listaAmigoSecreto.push(nome);

        document.querySelector('#listaAmigos').style.display = 'block';

        // Criar um novo elemento <li>
        const li = document.createElement('li');
        li.textContent = nome;

        // Adicionar na lista
        document.querySelector('#listaAmigos').appendChild(li);

        limparCampo();
    } else {
        alert("Por favor, insira um nome válido.");
    }  
}

function sortearAmigo() {
    if (listaAmigoSecreto.length === 0) {
        document.querySelector('#resultado').style.display = 'none';
        alert("A lista está vazia. Adicione nomes antes de sortear.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * listaAmigoSecreto.length);
    const nomeSorteado = listaAmigoSecreto[indiceSorteado];
    document.querySelector('#resultado').style.display = 'block';

    const lista = document.querySelector('#listaAmigos');
    const itens = lista.querySelectorAll('li');
    console.log(itens)
    const liRemover = Array.from(itens).find(li => li.textContent === nomeSorteado);

    if(liRemover) liRemover.remove();

    document.querySelector('#resultado').textContent = `O amigo sorteado é: ${nomeSorteado}`;

    document.querySelector('#listaAmigos').style.display = 'none';

    listaAmigoSecreto.splice(indiceSorteado, 1);

}

function limparCampo() {
    const nome = document.querySelector('.input-name');
    nome.value = '';
}
