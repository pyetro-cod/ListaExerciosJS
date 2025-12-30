const letras = ["a", "b", "a", "c", "b", "a"];
let total = letras.reduce((obj, letra) =>{
    if(obj[letra]){
      obj[letra] = obj[letra] + 1;
    } else{
      obj[letra] = 1;
    }
    return obj;
    
},{})
console.log(total)