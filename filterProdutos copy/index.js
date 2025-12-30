const produtos = [
  { nome: "Notebook", preco: 3000, categoria: "eletronico" },
  { nome: "Livro", preco: 40, categoria: "educacao" },
  { nome: "Fone", preco: 150, categoria: "eletronico" },
  { nome: "Caderno", preco: 25, categoria: "educacao" }
];

let filter = produtos.filter((obj) => {
  const condicao = obj.categoria === 'eletronico' && obj.preco > 200;
  return condicao
})
console.log(filter)