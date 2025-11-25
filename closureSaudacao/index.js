function criaSaudacao(saudacao){
    return (nome) =>{
        return ` ${saudacao}, ${nome}`;
    }
}

const oi = criaSaudacao("Oi");

console.log(oi("k"))