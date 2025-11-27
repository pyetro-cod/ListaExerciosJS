function numPar(n) {
    let totPar = 0;
    for (let num of n) {
        if (num % 2 === 0) {
            totPar++
        }
    }
    return totPar;
}

console.log(numPar([2, 3, 7, 8,]))