const button = document.getElementById('btn-aumenta');
const text = document.getElementById('text');

button.addEventListener('click', () => {
    text.style.fontSize = '30px';
    text.style.textTransform = 'UpperCase';
    
})