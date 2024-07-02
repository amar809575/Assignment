let colorChange = document.getElementById('colorChange');
colorChange.addEventListener('click', function() {
    document.body.style.background = changeColor();
})

let colorType = document.getElementById('colorType');

function changeColor() {
    let colorCodes = '0123456789ABCDEFGH';
    let color1 = '#';
    let color2 = '#';
    for (i = 0; i < 6; i++) {
        color1 = color1 + colorCodes[Math.floor(Math.random() * 16)];
        color2 = color2 + colorCodes[Math.floor(Math.random() * 16)];
        
    }
    let gradient = `linear-gradient(to right, ${color1}, ${color2})`;
    colorType.textContent = `Gradient Color: ${color1} to ${color2}`;
    console.log(gradient);

    return gradient;
}