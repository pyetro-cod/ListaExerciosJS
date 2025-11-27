const input = document.getElementById('text');
const button = document.getElementById('btn');

input.addEventListener('input', () => {
    (input.value.length > 0) ? button.disabled = false : button.disabled = true;
   
})