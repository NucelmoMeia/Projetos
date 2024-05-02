JavaScript(script.js):

JavaScript
let visor = document.getElementById('visor');
let valorAtual = '';
let operacaoPendente = null;

function inserirNumero(numero) {
    valorAtual += numero;
    visor.textContent = valorAtual;
}

function operacao(op) {
    if (valorAtual !== '') {
        calcularResultado();
    }
    operacaoPendente = op;
    valorAtual = '';
}

function calcularResultado() {
    if (valorAtual !== '') {
        let resultado = parseFloat(valorAtual);
