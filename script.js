function so(){
let n1 = parseFloat(document.getElementById('n1').value);
let n2 = parseFloat(document.getElementById('n2').value);

let resultado = n1 + n2;

document.getElementById('resultado').textContent = resultado;
}

function su(){
let n1 = parseFloat(document.getElementById('n1').value);
let n2 = parseFloat(document.getElementById('n2').value);

let resultado = n1 - n2;

document.getElementById('resultado').textContent = resultado;
}

function mu(){
let n1 = parseFloat(document.getElementById('n1').value);
let n2 = parseFloat(document.getElementById('n2').value);

let resultado = n1 * n2;

document.getElementById('resultado').textContent = resultado;
}

function di(){
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
let n1 = parseFloat(document.getElementById('n1').value);
let n2 = parseFloat(document.getElementById('n2').value);

let resultado = Math.pow(n1, n2);

document.getElementById('resultado').textContent = resultado;
}

function raiz(){
let n1 = parseFloat(document.getElementById('n1').value);
let n2 = parseFloat(document.getElementById('n2').value);

let resultado = Math.pow(n1, 1/(n2));

document.getElementById('resultado').textContent = resultado;
}

function fato(){
let n1 = parseFloat(document.getElementById('n1').value);
let n2 = parseFloat(document.getElementById('n2').value);

let resultado = 1;

for(let i = 1; i <= n1; i++){
    resultado = resultado * i;
}

document.getElementById('resultado').textContent = resultado;
}

function porc(){
let n1 = parseFloat(document.getElementById('n1').value);
let n2 = parseFloat(document.getElementById('n2').value);

let resultado = (n1 / n2) * 100 ;

document.getElementById('resultado').textContent = resultado;
}
