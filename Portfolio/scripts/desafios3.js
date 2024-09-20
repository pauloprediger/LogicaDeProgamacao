function calculaIMC(peso, altura) {
    return peso/(altura**2);
}


function calculaFatorial(numFat) {
    if(numFat === 0) {
        return 1;
    } else {
        return numFat * calculaFatorial(numFat - 1);
    }
}

function converteDolar (reais) {
    return (reais * 4.8).toFixed(2);
}

function areaSala (altura, largura){
    let area = altura * largura;
    let perimetro = 2 * (largura + altura);
    return console.log(`O perimetro da sala é: ${perimetro}m e a área é ${area}m`);
}

function tabuadaRecursiva (num, multiplicador = 1){
    if (multiplicador > 10){
        return;
    }else{
        console.log(`${num} * ${multiplicador} = ${num * multiplicador}`);
        tabuadaRecursiva (num, multiplicador + 1);
    }
}
console.log(calculaIMC(78, 1.75));
console.log(calculaFatorial(5));
console.log(converteDolar(9));
areaSala(20, 50);
tabuadaRecursiva(7);