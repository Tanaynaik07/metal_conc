function update() {
    const red = parseInt(document.getElementById('red').value) || 0;
    const green = parseInt(document.getElementById('green').value) || 0;
    const blue = parseInt(document.getElementById('blue').value) || 0;
    const result = document.getElementById('result');

    // Determine the resulting color description based on input values
    if (red <= 47 && red>=51  && green>=39 && green <= 43 && blue>=55 &&  blue <= 60) {
        result.innerText = "Concentration: 0ppm";
    } else if (red>=40 && red <= 43  && green>=32 && green <= 34 && blue>=46 &&  blue <= 48) {
        result.innerText = "Concentration: 2ppm";
    } else if (red>=44 && red <= 47  && green>=34 && green <= 37 && blue>=49 &&  blue <= 52) {
        result.innerText = "Concentration: 4ppm";
    } else if (red>=43 && red <= 51  && green>=34 && green <= 41 && blue>=48 &&  blue <= 56) {
        result.innerText = "Concentration: 6ppm";
    } else if (red>=41 && red <= 48  && green>=32 && green <= 38 && blue>=45 &&  blue <= 53) {
        result.innerText = "Concentration: 8ppm";
    } else if (red>=39 && red <= 41  && green>=28 && green <= 31 && blue>=40 &&  blue <= 43) {
        result.innerText = "Concentration: 10ppm";
    }  else {
        result.innerText = "Concentration: Off the Chart";
    }
}
