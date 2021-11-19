var jogador, vencedor = null;
var jogadorSel = document.getElementById('jogador');
var result = document.getElementById('result');
var quadrados = document.getElementsByClassName('quadrado');

mudarJogador('X');

function escolherQuadrado(id){
    if(vencedor !== null){
        return;
    }

    var quadrado = document.getElementById(id);
    if (quadrado.innerHTML !== '-'){
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = 'crimson';

    if(jogador === 'X'){
        jogador = 'O';

    } 
    else {
        jogador = 'X';
    }
    mudarJogador(jogador);
    checarVencedor();
}

function mudarJogador(valor){
    jogador = valor;
    jogadorSel.innerHTML =  'Jogador: ' + jogador;
    
}
function checarVencedor(){
    var quadrado1 = document.getElementById('item1');
    var quadrado2 = document.getElementById('item2');
    var quadrado3 = document.getElementById('item3');
    var quadrado4 = document.getElementById('item4');
    var quadrado5 = document.getElementById('item5');
    var quadrado6 = document.getElementById('item6');
    var quadrado7 = document.getElementById('item7');
    var quadrado8 = document.getElementById('item8');
    var quadrado9 = document.getElementById('item9');

    if(checarSequencia(quadrado1,quadrado2,quadrado3)){
        mudarCor(quadrado1,quadrado2,quadrado3);
        mudarVencedor(quadrado1);
        return;
    }
    if(checarSequencia(quadrado1,quadrado4,quadrado7)){
        mudarCor(quadrado1,quadrado4,quadrado7);
        mudarVencedor(quadrado1);
        return;
    }
    if(checarSequencia(quadrado2,quadrado5,quadrado8)){
        mudarCor(quadrado2,quadrado5,quadrado8);
        mudarVencedor(quadrado2);
        return;
    }
    if(checarSequencia(quadrado3,quadrado6,quadrado9)){
        mudarCor(quadrado3,quadrado6,quadrado9);
        mudarVencedor(quadrado3);
        return;
    }
    if(checarSequencia(quadrado4,quadrado5,quadrado6)){
        mudarCor(quadrado4,quadrado5,quadrado6);
        mudarVencedor(quadrado4);
        return;
    }
    if(checarSequencia(quadrado7,quadrado8,quadrado9)){
        mudarCor(quadrado7,quadrado8,quadrado9);
        mudarVencedor(quadrado7);
        return;
    }
    if(checarSequencia(quadrado1,quadrado5,quadrado9)){
        mudarCor(quadrado1,quadrado5,quadrado9);
        mudarVencedor(quadrado1);
        return;
    }
    if(checarSequencia(quadrado3,quadrado5,quadrado7)){
        mudarCor(quadrado3,quadrado5,quadrado7);
        mudarVencedor(quadrado3);
        return;
    }

}
function mudarVencedor(quadrado){
    vencedor = quadrado.innerHTML;
    result.innerHTML = 'Vencedor: ' + vencedor;
}
function mudarCor(quadrado1,quadrado2,quadrado3){
    quadrado1.style.background = 'green';
    quadrado2.style.background = 'green';
    quadrado3.style.background = 'green';
}
function checarSequencia(quadrado1, quadrado2, quadrado3){
    var igual = false
    if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML ){
   
        igual = true;
    }
    return igual;
}
function reiniciar(){
    vencedor = null;
    result.innerHTML = '';

    for(var i = 1; i <= 9; i++){
        var quadrado = document.getElementById('item'+i);
        quadrado.style.background = 'gray';
        quadrado.style.color = 'gray';
        quadrado.innerHTML = '-';
    }
    mudarJogador('X');
}
