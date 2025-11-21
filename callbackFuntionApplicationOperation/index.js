function aplicarOperacao(n1,n2,callback) {
    return(callback(n1,n2));
}

const resultMult = aplicarOperacao(6,6, (a,b) => a * b);
console.log(`Resultado da conta: ${resultMult}`)
