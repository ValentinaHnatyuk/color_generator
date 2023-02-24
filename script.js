const button = document.getElementById("btn");
const colorBox = document.getElementById("color-box");

function generateRandomColor() {
    const letters = '0123456789ABCDEF'; // hex values for colors
    let color = '#'; // the starting value for the color code.
    for (var i = 0; i < 6; i++) { // The loop runs for 6 iterations, which means it generates a 6-digit color code
        color += letters[Math.floor(Math.random() * 16)]; // generates a random index between 0-15 and appends it to 'color'
    }
    return color;
}


button.addEventListener("click",() => {
    colorBox.style.backgroundColor = generateRandomColor(); // an arrow function that sets the backgroundColor style 
                                                            // property of the colorBox element to the result of the generateRandomColor() function.
 });