function reverso (n){
    let arrayInvertido = [];
    
    for (let i = n.length - 1; i >= 0; i--) {    
        const elemento = n[i];
    
        arrayInvertido.push(elemento);
    }
    return arrayInvertido;
}

console.log(reverso([1, 2, 3]))    // Saída: [3, 2, 1]
console.log(reverso(['a', 'b', 'c', 'd'])) // Saída: ['d', 'c', 'b', 'a']