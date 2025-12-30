const usuarios = [
  { nome: "Ana", idade: 17 },
  { nome: "Bruno", idade: 22 },
  { nome: "Carla", idade: 30 }
];

let maiorIdade = usuarios.map(obj =>({
    nome: obj.nome,
    status: obj.idade < 18 ? 'Menor de Idade' : 'Maior de Idade'
}))
console.log(maiorIdade)