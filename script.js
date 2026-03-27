function so(){
    if (!validar()) return;
let n1 = parseFloat(document.getElementById('n1').value);
let n2 = parseFloat(document.getElementById('n2').value);

let resultado = n1 + n2;

document.getElementById('resultado').textContent = resultado;
}

function su(){
    if (!validar()) return;
let n1 = parseFloat(document.getElementById('n1').value);
let n2 = parseFloat(document.getElementById('n2').value);

let resultado = n1 - n2;

document.getElementById('resultado').textContent = resultado;
}

function mu(){
    if (!validar()) return;
let n1 = parseFloat(document.getElementById('n1').value);
let n2 = parseFloat(document.getElementById('n2').value);

let resultado = n1 * n2;

document.getElementById('resultado').textContent = resultado;
}

function di(){
    if (!validar()) return;
let n1 = parseFloat(document.getElementById('n1').value);
let n2 = parseFloat(document.getElementById('n2').value);

let resultado = n1 / n2;

document.getElementById('resultado').textContent = resultado;
if(n2 === 0){
    document.getElementById('resultado').textContent = "Nao da pra dividir por 0";
}
else{
    let resultado = n1 / n2;
    
    document.getElementById('resultado').textContent = resultado;
}
}
function pow(){
    if (!validar()) return;
let n1 = parseFloat(document.getElementById('n1').value);
let n2 = parseFloat(document.getElementById('n2').value);

let resultado = Math.pow(n1, n2);

document.getElementById('resultado').textContent = resultado;
}

function raiz(){
    if (!validar()) return;
let n1 = parseFloat(document.getElementById('n1').value);
let n2 = parseFloat(document.getElementById('n2').value);

let resultado = Math.pow(n1, 1/(n2));

document.getElementById('resultado').textContent = resultado;
}

function fato(){
    if (!validar()) return;
let n1 = parseFloat(document.getElementById('n1').value);
let n2 = parseFloat(document.getElementById('n2').value);

let resultado = 1;

for(let i = 1; i <= n1; i++){
    resultado = resultado * i;
}

document.getElementById('resultado').textContent = resultado;
}

function porc(){
    if (!validar()) return;
let n1 = parseFloat(document.getElementById('n1').value);
let n2 = parseFloat(document.getElementById('n2').value);

let resultado = (n1 / n2) * 100 ;

document.getElementById('resultado').textContent = resultado;
}

function validar(){
    
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);

    if (isNaN(n1) || isNaN(n2)){
        document.getElementById('resultado').textContent = "oi";
        return false;
    }
    return true;
}

function limp(){
    document.getElementById('n1').value = "";
    document.getElementById('n2').value = "";
    document.getElementById('resultado').textContent = "";

}