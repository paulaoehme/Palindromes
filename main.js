//Create a variable to store the array of words and leave it empty
var randomWordsArray = [];

//Determine which characters can be used to form a random word
var availableChars = "abcdefghijklmnopqrstuvwxyz";

//Determine the size of the array that is going to be created
var arraySize = 10000;

//For each slot in the array, generate a random word of random length (between 3 to 5 characters)
//using the allowed characters to do so, and push to the array
for(var i=0; i<arraySize; i++){
    
    //Select the length of the word 
    var randomLength = Math.floor(Math.random() * (5 - 3 + 1)) + 3;

    //Use the for loop to randomly generate a word and push it to the array
    var randomWord = "";
    for(var j=0; j<randomLength; j++){
        randomWord += availableChars.charAt(Math.floor(Math.random() * availableChars.length));
    }
    randomWordsArray.push(randomWord);
}

//Create a variable to store the number of palindromes and initialize it to zero
var palindromeCounter = 0;

//Check each word of the array to see if it is a palindrome. If so, increase counter
for(var i=0; i<randomWordsArray.length; i++){
    var reversedWord = randomWordsArray[i].split('').reverse().join('');
    if(randomWordsArray[i]==reversedWord){
        palindromeCounter++;
    }
}

//Print to the console the total number of words in the array and the total number of palindromes found
console.log("Total of words in the array = " + randomWordsArray.length);
console.log("Total of palindromes found = " + palindromeCounter);
