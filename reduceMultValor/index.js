const vendas = [
  { produto: "Mouse", quantidade: 2, preco: 50 },
  { produto: "Teclado", quantidade: 1, preco: 150 },
  { produto: "Monitor", quantidade: 1, preco: 800 }
];

let total = vendas.reduce((ac,valor) =>{
  let tot = ac + valor.quantidade * valor.preco;
  return tot
},0)

console.log(total)