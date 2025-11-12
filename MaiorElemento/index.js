function maiorNum(n) {
    let numeros = []
    for (let i = 0; i < n.length; i++) {
        if(n[i] > numeros)  {
            numeros = n[i]
        }
    }
    return numeros;
};
console.log(maiorNum([2,4,5,3,9]))