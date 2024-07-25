//Creates a random number between 1 and 10
randomNumber = Math.floor(Math.random() * 10) +1;
console.log(randomNumber);

//Prompts the user to guess a number between 1 and 10
let guess = prompt("Guess a number between 1 and 10");

//Creates a variable to keep track of the number of guesses
let guessNumber = 1;
console.log(guessNumber);

//If the user does not guess the correct number, the program will prompt the user to guess again, telling them if their guess was too high or too low, until they arrive at the right answer.
while (guess != randomNumber){

  guessNumber++;
  console.log(guessNumber);

  if(guess > randomNumber){

    guess = prompt("Your guess was too high, guess again");
    
  }

  else if(guess < randomNumber){

    guess = prompt("Your guess was too low, guess again");
    
  }
  
}

//If the user guesses correctly in 1 try, the following message will be displayed: "You guessed it in 1 try!"
if(guessNumber == 1){

   alert("You guessed it in 1 try!");
  
}
//If the user guesses correctly in more than 1 try, the following message will be displayed: "You guessed it in (guessNumber) tries!"
else{
   alert("You guessed it in " + guessNumber + " tries!");
}