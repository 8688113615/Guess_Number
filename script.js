let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber=Math.ceil(Math.random()*100)
function checkGuess() {
 let guessedNumber=parseInt(userInput.value)
 if(guessedNumber>randomNumber){
    gameResult.textContent="To High Value Try Again"
    gameResult.style.backgroundColor="#1e217c"
 }
 else if(guessedNumber<randomNumber){
       gameResult.textContent="To Low Value Try Again"
       gameResult.style.backgroundColor="#1e217b"

}
else if(guessedNumber===randomNumber){
    gameResult.textContent="Conguratlations You win the game"
    gameResult.style.backgroundColor="green"
}
else{
    gameResult.textContent="Invalid Input"
    gameResult.style.backgroundColor="orange"
}
}