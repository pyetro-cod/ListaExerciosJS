function criarContador() {
    let tot = 0;
    return {
        
        // Função de incrementar (que você já tinha feito)
        incrementar: () => {
            tot++;
            console.log(`Incrementando: ${tot}`);
        },
        
        // Função de zerar
        zerar: () => {
            tot = 0;
            console.log(`Zerado: ${tot}`);
        }
    }
};
const incrementar = criarContador();
incrementar.zerar()