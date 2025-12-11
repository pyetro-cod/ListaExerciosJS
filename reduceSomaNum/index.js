const numeros = [1, 2, 3, 4];

const total = numeros.reduce((acumulador,valor) =>{
  acumulador += valor;
  return acumulador
});
console.log(total);