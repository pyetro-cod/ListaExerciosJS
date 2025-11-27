function criarContador() {
    let tot = 0;
    return {
        
        // Função de incrementar (que você já tinha feito)
        incrementar: () => {
            tot++;
            console.log(`Incrementando: ${tot}`);
        },
        
        // Função de zerar
        sub: () => {
            tot--;
            console.log(`Subtrair: ${tot}`);
        }
    }
};
const incrementar = criarContador();
incrementar.incrementar()
incrementar.incrementar()
incrementar.sub()
