function reverso (n){
    // 1. 🚀 Começamos criando um novo array vazio.
    //    Este será o nosso "recipiente" para os elementos invertidos.
    let arrayInvertido = [];
    
    // 2. ⏪ O coração da inversão: nosso loop 'for' vai de TRÁS PARA FRENTE!
    //    - i começa no ÚLTIMO índice do array original (n.length - 1).
    //    - O loop continua enquanto 'i' for maior ou igual a 0 (o primeiro índice).
    //    - 'i' diminui a cada passo (i--).
    for (let i = n.length - 1; i >= 0; i--) {
        
        // 🎯 A cada passo, pegamos o elemento na posição 'i' do array original.
        const elemento = n[i];
        
        // 3. ✨ Adicionamos o 'elemento' que acabamos de pegar ao final do nosso 'arrayInvertido'.
        //    Como estamos pegando os elementos do array original de trás para frente,
        //    eles serão adicionados na ordem inversa no novo array.
        arrayInvertido.push(elemento);
    }
    
    // 4. ✅ Finalmente, quando o loop termina, retornamos o array totalmente invertido!
    return arrayInvertido;
}

// Exemplos de como a função funciona:
console.log(reverso([1, 2, 3]))            // Saída: [3, 2, 1] 🥳
console.log(reverso(['a', 'b', 'c', 'd'])) // Saída: ['d', 'c', 'b', 'a'] 💫
🧠 Explicação da Lógica do Loop: Uma Caminhada Reversa!
Imagine que seu array é uma fila, e queremos virá-la de ponta-cabeça.

Vamos pegar o exemplo: array = [1, 2, 3] (onde length = 3)

🎬 Início:
i começa em n.length - 1, que é 3 - 1 = 2.

Nosso arrayInvertido ainda está [].

🚶‍♀️ Iteração 1: i = 2
O que pegamos? O elemento em n[2], que é 3.

O que fazemos? Adicionamos 3 ao arrayInvertido.

Agora o arrayInvertido é: [3]

🚶‍♀️ Iteração 2: i = 1
O que pegamos? O elemento em n[1], que é 2.

O que fazemos? Adicionamos 2 ao arrayInvertido.

Agora o arrayInvertido é: [3, 2]

🚶‍♀️ Iteração 3: i = 0
O que pegamos? O elemento em n[0], que é 1.

O que fazemos? Adicionamos 1 ao arrayInvertido.

Agora o arrayInvertido é: [3, 2, 1]

🏁 Fim do Loop:
Após i = 0, i se torna -1.

A condição (-1 >= 0) é falsa, então o loop para.

A função returna o nosso arrayInvertido: [3, 2, 1]. 🎉

É como empilhar blocos, mas começando com o último e indo para o primeiro! 🧱⬆️