function saudacao(nome, callback) {
  console.log(`Olá, ${nome}!`);
  callback(); // executa a função passada
}

function despedida() {
  console.log("Até logo!");
}

saudacao("Pyetro", despedida);




// // Opção 2: Função Anônima (definida na hora)
// executarAcao(function() {
//   console.log("Ação do callback anônimo!");
// });

// // Opção 3: Usando Arrow Function (sintaxe moderna e mais curta)
// executarAcao(() => {
//   console.log("Ação do callback usando Arrow Function!");
// });