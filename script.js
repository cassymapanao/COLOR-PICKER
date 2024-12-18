document.getElementById('color-input').addEventListener('input', function(event) {
    const selectedColor = event.target.value;
    document.getElementById('color-display').style.backgroundColor = selectedColor;
    document.getElementById('color-code').innerText = `Selected Color: ${selectedColor}`;
});