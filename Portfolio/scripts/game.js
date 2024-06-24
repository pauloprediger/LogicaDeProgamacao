alert('Boas vindas ao meu portifólio');

// Jogo
const numeroMax = 10;
let numeroSecreto = Math.floor(Math.random() * numeroMax + 1);
console.log(numeroSecreto);
let chances = 3;
let chute;
let maiorMenor;

do{
    chute = prompt(`Escolha um número entre 0 e ${numeroMax}`);
    const Nchute = parseInt(chute);
    if (numeroSecreto === Nchute) {
        console.log('Você acertou');
        break;
    } else {
        console.log('Você Errou');
        numeroSecreto < Nchute ? maiorMenor = 'menor' : maiorMenor = 'maior'
        console.log(`O número é ${maiorMenor} que ${Nchute}`)
    }
    chances--;
} while (chances != 0)



