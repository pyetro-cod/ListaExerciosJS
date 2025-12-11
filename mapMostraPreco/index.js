const produtos = [
  { nome: "Notebook", preco: 2500 },
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 150 }
];

const preco = produtos.map(obj => ({preco: obj.preco}));
console.log(preco)