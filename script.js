// Display reference
const display = document.getElementById("display");
const historyList = document.getElementById("historyList");

// Sound effect
const clickSound = new Audio("https://www.soundjay.com/buttons/sounds/button-16.mp3");

// Play sound on every button click
document.addEventListener("click", function(e) {
    if (e.target.tagName === "BUTTON") {
        clickSound.currentTime = 0;
        clickSound.play();
    }
});

// Append values
function append(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
    try {
        let expression = display.value; and it

        let result = eval(expression);

        // Add to history
        let listItem = document.createElement("li");
        listItem.textContent = expression + " = " + result;
        historyList.appendChild(listItem);

        display.value = result;
    } catch {
        display.value = "Error";
    }
}

// Dark / Light mode toggle
function toggleMode() {
    document.body.classList.toggle("light-mode");
}￼Enter
