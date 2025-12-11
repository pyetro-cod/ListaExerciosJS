const produtos = [
  { nome: "Mouse", estoque: 3 },
  { nome: "Teclado", estoque: 0 },
  { nome: "Monitor", estoque: 2 }
];

const filterProduto = produtos.filter(obj => obj.estoque > 0);
console.log(filterProduto)