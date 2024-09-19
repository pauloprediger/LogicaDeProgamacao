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

console.log(calculaIMC(78, 1.75));
console.log(calculaFatorial(5));