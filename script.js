var getInput = document.getElementById('input');
var voceDisseElement = document.getElementById('voceDisse');
var cebolinhaDisse = document.getElementById('cebolinhaDisse');
var getClasseTraduzido = document.getElementsByClassName('traduzido');

for(var i = 0; i < getClasseTraduzido.length; i+=1){
    getClasseTraduzido[i].style.display = 'none'
}

function traduzir() {
    if(!getInput.value) return;

    if(getInput.value){
        let frase = getInput.value;
        let traduzido = frase.toLowerCase().replaceAll("r", "l");
        voceDisseElement.innerHTML = frase;
        cebolinhaDisse.innerHTML = traduzido;

        for(var i = 0; i < getClasseTraduzido.length; i+=1) {
            getClasseTraduzido[i].style.display = 'block';
        }
    }

    getInput.value = "";
}
