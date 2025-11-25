const botaoMostrar = document.getElementById('btn');
const texto = document.getElementById('text');

let botaoApagar = document.createElement('button');
botaoApagar.textContent = 'oculta esse mesmo texto';
document.body.appendChild(botaoApagar);

botaoApagar.addEventListener('click', () =>{
    texto.style.display = 'none'; //  'none': Remove o elemento do fluxo normal da página, escondendo-o completamente.
})

botaoMostrar.addEventListener('click', () =>{
    texto.style.display = 'block';
})