
// This function runs when the user clicks the button.
function changeText() {

    // Create an array containing five possible headings.
    var textsArray = ["Text 1", "Text 2", "Text 3", "Text 4", "Text 5"];

    // Select a random position from the array.
    var number = getRandomNumberBetween(0, textsArray.length - 1);

    // Print the selected position in the browser console.
    console.log("Index:", number);

    // Find the heading and replace its text.
    document.getElementById("heading").innerHTML = textsArray[number];
}

// This function generates a random whole number.
function getRandomNumberBetween(min, max) {

    // Math.random() generates a number between 0 and 1.
    // Math.floor() rounds it down to a whole number.
    return Math.floor(Math.random() * (max - min + 1) + min);
}
