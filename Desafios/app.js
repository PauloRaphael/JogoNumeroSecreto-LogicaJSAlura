//FIRST CHALLENGE
document.quertSelector('h1').innerHTML = 'Hora do Desafio.';

function botaoClicado() {
    console.log('O botão foi clicado.')
}

function alert() {
    console.log('Eu amo JS')
}

function prompt() {
    let cidade = prompt('Digite o nome de uma cidade do Brasil');

    alert(`Estive em ${cidade} e lembrei de você`)
}

function soma() {
    let n1 = prompt('Digite o primeiro número');
    let n2 = prompt('Digite o segundo número');

    alert(`A resultado da soma desses numeros é ${n1 + n2}`)
}

//SECOND CHALLENGE
function helloWorld() {
    console.log('Olá, Mundo!')
}

function greeting(nome) {
    console.log(`Olá, ${nome}!`)
}

function double(number) {
    return parseInt(number * 2)
}

function averege(numberA, numberB, numberC) {
    return (numberA + numberB + numberC) / 3;
}

function max(numberA, numberB) {
    return numberA > numberB ? numberA : numberB;
}

function square(number) {
    return number * number;
}