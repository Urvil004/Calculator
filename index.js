const display = document.getElementById("display"); //This line of code showing to Get the display input element

function appendToDisplay(input) {    //This function shows how appends the typed button's value to the display
    display.value += input;
}

function clearDisplay() {  //This function shows how clears the all typed inputs 
    display.value = "";
}

function clearLast() {    //This function shows how clears the last character enter by user in the display
    display.value = display.value.slice(0, -1);
}
function calculate() {  //This function shows how evaluates the mathematical expression like -,/,*,+ in the display
    try {
        display.value = eval(display.value); // Perform operation
    }
    catch (error) {
        display.value = "Error"; //If errornous input typed by user this line of code gives error to the display
    }
}