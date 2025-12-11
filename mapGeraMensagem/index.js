const pessoas = [
  { nome: "João", idade: 20 },
  { nome: "Ana", idade: 25 }
];

const memsagem = pessoas.map(ojb => `${ojb.nome} tem ${ojb.idade} anos.`)
console.log(memsagem)
