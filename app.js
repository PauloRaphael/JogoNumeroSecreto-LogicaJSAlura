
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto')
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10')

function verificarChute() {
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!')
        exibirTextoNaTela('p', 'Você descobriu o numero secreto!')
    } else {
        if(chute < numeroSecreto) {
            exibirTextoNaTela('p', 'O numero secreto é maior')
        } else {
            exibirTextoNaTela('p', 'O numero secreto é menor.')
        }
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}