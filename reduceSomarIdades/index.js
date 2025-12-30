const pessoas = [
  { nome: "Ana", idade: 20 },
  { nome: "Pedro", idade: 30 },
  { nome: "Maria", idade: 25 }
];

const total = pessoas.reduce((ac,valor) =>ac+ valor.idade,0)
console.log(total)