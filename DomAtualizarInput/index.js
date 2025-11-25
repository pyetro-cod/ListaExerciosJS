const input = document.getElementById('input');
const button = document.getElementById('btn');
const recebeInput = document.getElementById('paragrafo-saida')


button.addEventListener('click', () =>{
    const guardaInput = input.value;

    recebeInput.textContent = guardaInput;
})