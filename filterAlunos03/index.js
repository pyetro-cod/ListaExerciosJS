const alunos = [
  { nome: "Ana", nota: 7 },
  { nome: "João", nota: 4 },
  { nome: "Lara", nota: 9 },
  { nome: "Pedro", nota: 5 }
];

const filterAlunos = alunos.filter(obj => obj.nota >= 6);
console.log(filterAlunos)