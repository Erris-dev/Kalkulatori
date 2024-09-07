//Calculator Function

let display = document.getElementById('rezultati');

function merrVleren(input) {
    display.value += input;
}

function fshijeVleren() {
    display.value = "";
}

function kalkulimi() {
    display.value = eval(display.value)
}
