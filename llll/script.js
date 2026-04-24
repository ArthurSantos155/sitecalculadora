let pontos = 0;
let click = 1;

let upgrade1forca = 1;
let upgrade1preco = 50;
let upgrade1quantidade = 0;

let upgrade2forca = 2;
let upgrade2preco = 150;
let upgrade2quantidade = 0;

let upgrade3forca = 10;
let upgrade3preco = 3500;
let upgrade3quantidade = 0;

let upgrade4forca = 20;
let upgrade4preco = 6500;
let upgrade4quantidade = 0;

let upgrade5forca = 30;
let upgrade5preco = 10000;
let upgrade5quantidade = 0;

let pontosPorSegValor = 0; // Nome alterado para evitar conflito
let pontosPorSegPreco = 200;

setInterval(function(){
    pontos = pontos + pontosPorSegValor;
    document.getElementById('pontos').textContent = pontos;
}, 1000);

function clicker(){
    click = 1 + (upgrade1quantidade * upgrade1forca) + (upgrade2quantidade * upgrade2forca);
    pontos = pontos + click;
    document.getElementById('pontos').textContent = pontos;
        localStorage.setItem('pontos', pontos);

}

function upgrade1(){
    if(pontos >= upgrade1preco){
        pontos = pontos - upgrade1preco;
        upgrade1quantidade++;
        upgrade1preco = upgrade1preco * 2;
        
        document.getElementById('pontos').textContent = pontos;
        document.getElementById('upgrade1preco').textContent = upgrade1preco;
    }
}

function upgrade2(){
    if(pontos >= upgrade2preco){
        pontos = pontos - upgrade2preco;
        upgrade2quantidade++;
        upgrade2preco = upgrade2preco * 2;
        
        document.getElementById('pontos').textContent = pontos;
        document.getElementById('upgrade2preco').textContent = upgrade2preco;
    }
}

function upgrade3(){
    if(pontos >= upgrade3preco){
        pontos = pontos - upgrade3preco;
        upgrade3quantidade++;
        upgrade3preco = upgrade3preco * 2;
        
        document.getElementById('pontos').textContent = pontos;
        document.getElementById('upgrade3preco').textContent = upgrade3preco;
    }
}

function upgrade4(){
    if(pontos >= upgrade4preco){
        pontos = pontos - upgrade4preco;
        upgrade4quantidade++;
        upgrade4preco = upgrade4preco * 2;
        
        document.getElementById('pontos').textContent = pontos;
        document.getElementById('upgrade4preco').textContent = upgrade4preco;
    }
}

function upgrade5(){
    if(pontos >= upgrade5preco){
        pontos = pontos - upgrade5preco;
        upgrade5quantidade++;
        upgrade5preco = upgrade5preco * 2;
        
        document.getElementById('pontos').textContent = pontos;
        document.getElementById('upgrade5preco').textContent = upgrade5preco;
    }
}

// Função renomeada para não bugar a variável
function comprarPontosPorSeg(){
    if(pontos >= pontosPorSegPreco){
        pontos = pontos - pontosPorSegPreco;
        
        pontosPorSegValor = pontosPorSegValor + 1; // Aumenta o ganho passivo
        pontosPorSegPreco = pontosPorSegPreco * 2; // Dobra o preço
        
        document.getElementById('pontos').textContent = pontos;
        document.getElementById('pontosPorSeg').textContent = pontosPorSegValor;
        document.getElementById('pontosPorSegPre').textContent = pontosPorSegPreco;
    }
}

setInterval(function(){
    localStorage.setItem('pontos', pontos);
    localStorage.setItem('pontosPorSeg', pontosPorSegPreco)
},1000)