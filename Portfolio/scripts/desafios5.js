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

calcula('+', 8, 9);
calcula('-', 8, 9);
calcula('*', 8, 9);
calcula('/', 8, 9);

