function converte(str) {
   return parseInt(str, 10);
}

console.log(converte('batata'));
console.log(converte('50'));

let calculadora = {
    soma : (num1, num2) => {
        return num1 + num2
    },
    subtracao : (num1, num2) => {
        return num1 - num2;
    },
    multiplicacao : (num1, num2) => {
        return num1 * num2;
    },
    divisao : (num1, num2) => {
        return num1 / num2;
    }
}


function calcula(operador, num1, num2) {
    const operacoes = {
        '+': calculadora.soma,
        '-': calculadora.subtracao,
        '*': calculadora.multiplicacao,
        '/': calculadora.divisao
    };

    if (operacoes[operador]) {
        const resultado = operacoes[operador](num1, num2);
        console.log(`${num1} ${operador} ${num2} = ${resultado}`);
    } else {
        console.log('Operador inválido');
    }
}

function removeDuplicados (array) {
    return [...new Set(array)];
}

calcula('+', 8, 9);
calcula('-', 8, 9);
calcula('*', 8, 9);
calcula('/', 8, 9);

let minhaLista = [1, 2, 3];
let outraLista = [4, 5, 6];
let novaLista = minhaLista.concat(outraLista);

console.log(novaLista);

novaLista.pop();

console.log(novaLista);

for (let i = novaLista.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [novaLista[i], novaLista[j]] = [novaLista[j], novaLista[i]];
}

console.log(novaLista);
novaLista.push(2, 6, 7, 8, 1, 2, 3, 4,5,6,6,7,8,9,10);
console.log(removeDuplicados(novaLista));