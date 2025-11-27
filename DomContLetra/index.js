const input = document.getElementById('text');
const tot = document.getElementById('tot');

input.addEventListener('input', () => {
    const textEcrito = input.value;
    tot.textContent = textEcrito.length;
})