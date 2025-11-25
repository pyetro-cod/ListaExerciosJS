const buttonAumentar = document.getElementById('btn-aumentar');
const buttonDiminuir = document.getElementById('btn-diminuir');
const resultado = document.getElementById('result');

resultado.textContent = '0';

buttonAumentar.addEventListener('click', () =>{
    let numAtual = parseInt(resultado.textContent);
    numAtual++;
    resultado.textContent = numAtual
});

buttonDiminuir.addEventListener('click', () =>{
    let numAtual = parseInt(resultado.textContent);
    numAtual--;
    resultado.textContent = numAtual
});