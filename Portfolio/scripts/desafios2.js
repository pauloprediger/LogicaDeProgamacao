function escreveOlaMundo () {
    console.log('Olá mundo');
}
function escreveNome (nome) {
    console.log(`Olá ${nome}`);
}
function retornaDobro (numero) {
    return numero*2;
}

function retornaMedia (primeiroNum, segundoNum, terceiroNum) {
    return (primeiroNum + segundoNum + terceiroNum) / 3;
}

function retornaMaior (primeiroNum, segundoNum) {
    let maior;
    primeiroNum > segundoNum ? maior = primeiroNum : maior = segundoNum;
    return maior;
}

function retornaQuadrado (numero) {
    return numero**2;
}

// TESTES

escreveOlaMundo();
escreveNome('Paulo');
console.log(retornaDobro(25));
console.log(retornaMedia(10, 20, 30));
console.log(retornaMaior(1, 2));
console.log(retornaMaior(2, 1));
console.log(retornaQuadrado(5));