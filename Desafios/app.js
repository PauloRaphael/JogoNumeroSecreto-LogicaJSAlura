//FIRST CHALLENGE
document.querySelector('h1').innerHTML = 'Hora do Desafio.';

function botaoClicado() {
    console.log('O botão foi clicado.');
}

function alert() {
    console.log('Eu amo JS');
}

function prompt() {
    let cidade = prompt('Digite o nome de uma cidade do Brasil');

    alert(`Estive em ${cidade} e lembrei de você`);
}

function soma() {
    let n1 = prompt('Digite o primeiro número');
    let n2 = prompt('Digite o segundo número');

    alert(`A resultado da soma desses numeros é ${n1 + n2}`);
}

//SECOND CHALLENGE
function helloWorld() {
    console.log('Olá, Mundo!');
}

function greeting(nome) {
    console.log(`Olá, ${nome}!`);
}

function double(number) {
    return parseInt(number * 2);
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

//THIRD CHALLENGE

function imc(weigth, height) {
    return weigth / (height * height);
}

function factorial(n) {
    return n * (n == 1 ? 1 : factorial(n - 1)); 
}

function dolarConverter(dolars) {
    return dolars * 4.80;
}

function perimeter(height, width) {
    console.log(height * width);
}

function circleArea(radius) {
    console.log(3.14 * (radius * radius));
}

function multiplicationTable(number) {
    for(let i = 1; i < 10; i++) {
        console.log(`${number} * ${i} == ${number * i}`);
    }
}

// FOURTH LESSON

let listaGenerica = [];

let linguagensDeProgramacao = ['Javascript', 'C','C++', 'Kotlin', 'Python'];

linguagensDeProgramacao.push('Java');
linguagensDeProgramacao.push('Ruby');
linguagensDeProgramacao.push('GoLang');

let nomes = ['Eileen', 'Alfred', 'Arianna'];

console.log(nomes[0]);
console.log(nomes[1]);
console.log(nomes[2]);