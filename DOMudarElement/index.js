const botao = document.getElementById('button');
const paragrafo = document.getElementById('paragrafo');

botao.addEventListener('click', () =>{
    paragrafo.textContent = 'Texto alterado com JavaScript'
})