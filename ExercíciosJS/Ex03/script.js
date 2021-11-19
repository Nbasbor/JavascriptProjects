let num = document.getElementById('txtn1');
let lista = document.getElementById('sellista')
let res = document.getElementById('res');
let valores = [];

function isNumero(n){ // verificar se é um numero de 0 a 100
    if (Number(n)>=1 && Number(n)<=100){
        return true;
    }else {
        return false;
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){ // verifica se a posição do elemento é diferente de -1
        return true;     
    } else{
        return false;
    }
}
function contar(){
    if (isNumero(num.value) && !inLista(num.value, valores)) {//se for numero e se não estiver em lista
        valores.push(Number(num.value));
       //para limpar o codigo lista.innerHTML = ' '
        var item = document.createElement('option'); //cria uma tag option
        item.text = `O valor adicionado foi ${num.value}`
        lista.appendChild(item); //tentativa de resolução
        res.innerHTML = ' '
    } else{
        window.alert('Valor inválido ou ja inserido na lista!')
    } num.value = ' '
    num.focus();
}
function resultado(){
    if (valores.length == 0){
        window.alert('Por favor preencher com um valor!')
    } 
    else {
        res.innerHTML =' '
        let total = valores.length
        let soma = 0
        let maior = valores[0];
        let menor = valores[0];
        for (let pos in valores ){  // pos (é uma palavra reservada) para a posição dentro do vetor
            soma += valores[pos]
            if (valores[pos]>maior){
                maior = valores[pos];
            }
            if (valores[pos]<menor){
                menor = valores[pos];
            }
        }
        let media = soma/valores.length
        res.innerHTML =  `<p><strong>Ao todo temos ${total} numeros cadastrados</strong></p>`
        res.innerHTML += `<p><strong>A soma dos valores é ${soma}</strong></p>`
        res.innerHTML += `<p><strong>O maior valor é ${maior}</strong></p>`
        res.innerHTML += `<p><strong>O menor valor é ${menor}</strong></p>` //+= para somar o parágrafo
        res.innerHTML += `<p><strong>A média dos valores é ${media}</strong></p>`
    }
}