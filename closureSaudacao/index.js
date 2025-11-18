function criaSaudacao(saudacao){
    return (nome) =>{
        return ` ${saudacao}, ${nome}`;
    }
}

const oi = criaSaudacao("Oi");
const ola = criaSaudacao("Olá")

console.log(oi("Pyetro"))