function criarContador(){
    return () =>{
        let tot= 0;
        tot++;
        console.log(tot)
    }
    
}
const incrementar = criarContador();
incrementar()