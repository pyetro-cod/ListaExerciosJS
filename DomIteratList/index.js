const button = document.getElementById('btn');
const input = document.getElementById('text');
const list = document.getElementById('list');



button.addEventListener('click', () => {
    const itemDigitado = input.value;
    
    if(itemDigitado === ''){
        alert('Digite um valor')
        return
    }

    const li = document.createElement('li');
    li.textContent = itemDigitado;
    list.appendChild(li);

    input.value = '';
})