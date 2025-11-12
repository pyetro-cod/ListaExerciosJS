function somaNum(num) {
    let soma = 0
    for (let i = 0; i < num.length; i++) {
        soma += num[i];
    }
    return soma
}
console.log(somaNum([1, 2, 3]))
