var getInput = document.getElementById('input');
var voceDisseElement = document.getElementById('voceDisse');
var cebolinhaDisse = document.getElementById('cebolinhaDisse');

function traduzir() {
    if(!getInput.value) return;
    let frase = getInput.value;
    let traduzido = frase.toLowerCase().replaceAll("r", "l");
    voceDisseElement.innerHTML = frase;
    cebolinhaDisse.innerHTML = traduzido;


    getInput.value = "";
}
