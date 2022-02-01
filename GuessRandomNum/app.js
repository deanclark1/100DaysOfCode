const readline = require("readline-sync");

let randomNumber = Math.floor(Math.random() * 100) + 1;

let guessCounts = 1;




const playerGuess = () => {
    let guess = readline.question("Guess a Number between 1 and 100 ");
        guess = parseInt(guess);
        console.log("Your Guess is: ",guess);
    if(guess === randomNumber){
        console.log("Congratulations! You got it right! ");
        console.log(`random Number is: ${randomNumber} and your guess is: ${guess}`);
    } else if(guessCounts === 10){
        console.log("Game over!");
    } else{
        if(guess !== randomNumber && guess < randomNumber){
            console.log("You are Wrong, Too low")
            playerGuess();        
        } else if(guess !== randomNumber && guess > randomNumber){
            console.log("You are wrong, Too high");
            playerGuess();
        }
    }
   
    guessCounts++
    
}

playerGuess();



