let titulo = document.querySelector('h1');
titulo.innerText = 'Hora do Desafio';

function clickConsole () {
    console.log('O botão foi clicado');
}

function clickAlert () {
    window.alert('Eu amo JS');
}

function clickPrompt () { 
    let country = prompt('Digite uma cidade do Brasil');
    window.alert(`Estive em ${country}`);
}

function clickSoma () {
    let num1 = prompt('Entre com o 1º número');
    let num2 = prompt('Entre com o 2º número');
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    window.alert(`A soma dos valores é ${num1 + num2}`);
}