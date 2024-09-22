let listaNumerosSorteados = [];
let numeroMaximo = 40;

// INICIALIZAÇÃO DO JOGO

let numero = gerarNumeroAleatorio(1, numeroMaximo);
let tentativas = 1;

// FUNÇÃO PARA EXIBIR TEXTO NA TELA
function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2}); 
}

// FUNÇÃO QUE GERA O NÚMERO ALEATÓRIO 

function gerarNumeroAleatorio (min, max) {
    let numeroEscolhido =  Math.floor(Math.random() * (max - min +1)) + min;
    let quantidadeDeElementosNaLista = listaNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == numeroMaximo) {
        listaNumerosSorteados = [];
    }
    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    } 
}

// FUNÇÃO QUE LIMPA O CAMPO DE INPUT 

function limpaCampo () {
    chute = document.querySelector('input');
    chute.value = '';
}

function telaInicial () {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroMaximo}`)
}

telaInicial();

function verificaChute (numero) {
    let chute = document.querySelector('input').value;
    limpaCampo();
    let chuteNum = Number(chute);
    let palavraTentativa =  tentativas > 1 ? 'chutes' : 'chute'
    let mensagemTentativas = `Você descobriu o número com ${tentativas} ${palavraTentativa}`;
    if (chuteNum === numero) {
        document.getElementById('reiniciar').removeAttribute('disabled');
        exibirTextoNaTela('h1', 'Parabéns');
        exibirTextoNaTela('p', mensagemTentativas);
    } else {
        console.log(tentativas);
        if (chuteNum > numero) {
            exibirTextoNaTela('h1', 'Você errou');
            exibirTextoNaTela('h1', 'O número é menor');
        } else {
            exibirTextoNaTela('h1', 'Você errou');
            exibirTextoNaTela('h1', 'O número é maior');
        }
        tentativas++;
    }
}

function novoJogo () {
    tentativas = 1;
    numero = gerarNumeroAleatorio(1, 10);
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
    telaInicial();
}


