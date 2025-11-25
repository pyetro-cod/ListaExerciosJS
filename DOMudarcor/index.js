const botao = document.getElementById('button');
const body = document.getElementById('muda-cor');

botao.addEventListener('click', () => {
    body.style.backgroundColor = 'blue'
})

let newElement = document.createElement('button');
newElement.textContent = 'Voltar Padão';
document.body.appendChild(newElement)

newElement.addEventListener('click', () => {
    document.body.style.backgroundColor = 'white'
})
