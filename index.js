function update() {
    const red = parseInt(document.getElementById('red').value) || 0;
    const green = parseInt(document.getElementById('green').value) || 0;
    const blue = parseInt(document.getElementById('blue').value) || 0;
    const result = document.getElementById('result');

    // Determine the resulting color description based on input values
    if (red <= 50 && red>=48  && green>=41 && green <= 42 && blue>=57 &&  blue <= 58) {
        result.innerText = "Concentration: 0ppm";
    } else if (red>=45 && red <= 46  && green>=35 && green <= 36 && blue>=49 &&  blue <= 50) {
        result.innerText = "Concentration: 2ppm";
    } else if (red>=46 && red <= 48  && green>=35 && green <= 36 && blue>=49 &&  blue <= 50) {
        result.innerText = "Concentration: 4ppm";
    } else if (red>=44 && red <= 45  && green>=32 && green <= 32 && blue>=45 &&  blue <= 46) {
        result.innerText = "Concentration: 6ppm";
    } else if (red>=45 && red <= 46  && green>=33 && green <= 33 && blue>=46 &&  blue <= 46) {
        result.innerText = "Concentration: 8ppm";
    } else if (red>=37 && red <= 38  && green>=24 && green <= 25 && blue>=37 &&  blue <= 38) {
        result.innerText = "Concentration: 10ppm";
    }  else {
        result.innerText = "Concentration: Off the Chart";
    }
}
