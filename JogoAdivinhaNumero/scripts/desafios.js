let num = prompt('Digite um número')
let numCorrigido = parseInt(num);
num >= 0 ? window.alert('Positivo') : window.alert('Negativo');

let dia = prompt('Digite o dia da semana')
console.log(dia);

dia = dia.toLowerCase();
console.log(dia);

if (dia === 'sabado' || dia === 'domingo') {
    window.alert('Bom final de semana');
} else {
    window.alert('Boa semana');
}

let pontuacao = (pontos) => {
    pontos >= 100 ? window.alert('Você ganhou') : window.alert('Tente Novamente')
}

pontuacao(50)
pontuacao(100)
pontuacao(110)

