function clearAll() {
    document.getElementById("Result").innerText = '';
}

function update(value) {
    document.getElementById("Result").innerText += value;
}

function result() {
    document.getElementById("Result").innerText = (eval(document.getElementById("Result").innerText)).toFixed(2);
}