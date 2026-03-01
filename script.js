function append(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let current = document.getElementById("display").value;
    document.getElementById("display").value = current.slice(0, -1);
}

function calculate() {
    try {
        let expression = document.getElementById("display").value
            .replace(/÷/g, "/")
            .replace(/×/g, "*");

        let result = eval(expression);
        document.getElementById("display").value = result;
    } catch {
        document.getElementById("display").value = "Error";
    }
}
