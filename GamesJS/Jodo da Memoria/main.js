const cards =  document.querySelectorAll('.card'); // ALL para adcionar todos
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

function flipCard() {
    if(lockBoard) return;
    if(this === firstCard) return; // bloqueia o cliqe duplo
    this.classList.add('flip');//toggle adiciona e tira o elemento da lista de classes
                    //add adiciona a classe uma vez
    if(!hasFlippedCard){ //se estiver false ira ser setado como true
        hasFlippedCard = true;
        firstCard = this;
        return;
    } //se tiver viado a primeira carta retorna a segunda, se não , retorna a primeira
    secondCard = this;
    hasFlippedCard = false; // para ser resetado ao virar a carta 
    checkForMath();
}

function checkForMath(){
    if(firstCard.dataset.card === secondCard.dataset.card){
        disableCards();
        return; //desabilitar o clicke da carta
    } 
    
    unflipCards(); // desvira a carta


}

function disableCards(){
    firstCard.removeEventListener('click', flipCard); // o segundo parâmetro é o call back
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards(){
    lockBoard = true;//trava o tabuleiro
    setTimeout(() =>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        
        resetBoard()
    }, 1500)
}

function resetBoard(){
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null] //reseta as ações
}

(function randomCards(){
    cards.forEach((card) => {
        let randomPosition = Math.floor(Math.random() * 12); // 12 vezes até 1 (12 cartas) 
        card.style.order = randomPosition;
    })
}
)(); //imediatle invocad function ( chamada sempre que inicia o jogo a (function x(){}))()
cards.forEach((card) => {
    card.addEventListener('click', flipCard); 
    // quando clica adiciona a classe
});


