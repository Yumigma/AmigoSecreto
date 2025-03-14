let nomes = [];

function adicionarAmigo() {
    let inputNome = document.getElementById("amigo").value.trim();
    let listaAmigos = document.getElementById("listaAmigos");

    // Normalize input (remove extra spaces and convert to lowercase)
    inputNome = inputNome.replace(/\s+/g, ' ').toLowerCase();

    if (inputNome === "") {
        alert("Por favor, insira um nome válido.");
    } else if (nomes.includes(inputNome)) {
        alert("Este nome já foi adicionado.");
    } else {
        nomes.push(inputNome);
        let novoItem = document.createElement("li");
        novoItem.textContent = inputNome;
        listaAmigos.appendChild(novoItem);
        document.getElementById("amigo").value = ""; // Limpar campo
    }
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpa a lista anterior

    if (nomes.length === 0) {
        alert("Nenhum nome disponível para o sorteio.");
    } else {
        let sorteado = nomes[Math.floor(Math.random() * nomes.length)];
        let itemResultado = document.createElement("li");
        itemResultado.textContent = `O amigo secreto sorteado foi: ${sorteado}`;
        resultado.appendChild(itemResultado);
    }
}