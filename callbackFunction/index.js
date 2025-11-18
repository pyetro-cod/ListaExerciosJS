function executarAcao(callback) {
    callback();

}
executarAcao(function() {
    console.log('Ação executada');
});


// // Opção 2: Função Anônima (definida na hora)
// executarAcao(function() {
//   console.log("Ação do callback anônimo!");
// });

// // Opção 3: Usando Arrow Function (sintaxe moderna e mais curta)
// executarAcao(() => {
//   console.log("Ação do callback usando Arrow Function!");
// });