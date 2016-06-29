/**************************
Assignment 3, Part 2
***************************/

// //The Rock, Paper, Scissors Game
// var userChoice = prompt("Choose one and type it into the field: rock, paper, or scissors.");
// var computerChoice = Math.random();
// //var computerThrow
// var rock = "rock";
// var paper = "paper";
// var scissors = "scissors";

// console.log(userChoice);
// //console.log(computerChoice);

// if (computerChoice < 0.33) {
//     computerChoice = rock;
// } else if (computerChoice > 0.33 && computerChoice < 0.66){
//     computerChoice = paper;
// } else if (computerChoice > 0.66 && computerChoice < 1){ 
//     computerChoice = scissors;
// }
// //console.log(computerChoice);

// if (userChoice == computerChoice){
//     alert("It's a tie!");} 
// else if (userChoice == rock && computerChoice == scissors){
//     alert("Rock beats scissors! You won!");
//     }
// else if (computerChoice == rock && userChoice == scissors){
//         alert("Sorry. Rock beats scissors. You lose.");
//     }
// else if (userChoice == scissors && computerChoice == paper){
//     alert("Scissors beats paper! You won!");
//     }
// else if (computerChoice == scissors && userChoice == paper){
//     alert("Sorry. Scissors beats paper. You lose");
//     }
// else if (userChoice == paper && computerChoice == rock){
//     alert("Paper beats rock! You win!");
//     }
// else if (computerChoice == paper && userChoice == rock){
//     alert("Sorry. Paper beats rock. You lose.");
//     }
// else {
//     alert("Dude. Was that even a word?");
// }



// //The Basic Calculator
// var validOp = false;

// function calculate(numA, numB, opC){
//     numA = Number(numA);
//     numB = Number(numB);
//     switch (opC){
//                 case "add":
//                     var total = numA + numB;
//                     alert(total);
//                     validOp = true;
//                     break;
//                 case "subtract":
//                     total = numA - numB;
//                     alert(total);
//                     validOp = true;
//                     break;
//                 case "multiply":
//                     total = numA * numB;
//                     alert(total);
//                     validOp = true;
//                     break;
//                 case "divide":
//                     total = numA / numB;
//                     alert(total);
//                     validOp = true;
//                     break;
//                 default: 
//                     alert("You haven't entered a valid operation. Please pick between add, subtract, multiply, and divide.");
//             }
// }

// while(validOp == false){
//     var num1 = prompt("Pick a number:");
//     var num2 = prompt("Pick another number:");
//     var op = prompt("What would you like to do with these numbers? (add, subtract, multiply, divide)");
//     calculate(num1,num2,op);
// }



//Death by Javascript
// #1 
// function newFunction(x){
//     console.log(x.split("").sort().join(""));
// }

// var sampleData = "webmaster";
// newFunction(sampleData);


// // //#2
// function capitalFunction(y){
//     var ySplit=y.split(" ");
//     var completeString = "";
//     for(var i=0;i<ySplit.length;i++){
//           var randomVar = ySplit[i][0].toUpperCase();
//           var blah = randomVar + ySplit[i].slice(1);
//           completeString = completeString+blah+" ";
//     }
//     console.log(completeString);
// }
           
// var sampleData2 = "the quick brown fox";
// capitalFunction(sampleData2);         
            
            


// //#3
// function vowelCounter(K){
//     var charac = K.split("");
//     //var vowels = "";
//     //var vowelsCount = vowels.length;
//     var allVowels = "";
    
//     for(var i=0;i<charac.length;i++){
//         if (charac[i][0] == "a" || charac[i][0] == "e" || charac[i][0] == "i" || charac[i][0] == "o" || charac[i][0] == "u"){
//             var vowels = charac[i].slice(0);
//             allVowels = allVowels+vowels;
//             var vowelsCount = allVowels.length;
//         }
//     }
//     console.log(vowelsCount);
// }

// var sampleData3 = "The quick brown fox";
// vowelCounter(sampleData3);


// //#4
// function randomOutput(){
//     var possibles = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//     var completeString = "";
//     for (i=0;i<7;i++){
//         var randomNum = Math.floor(Math.random()*62);
//         var words = possibles.charAt(randomNum);
//         completeString = completeString + words;
//     }
//     console.log(completeString);
// }
// randomOutput();


// //#5
// function longestCountry(c){
//     for (i=0;i<c.length;i++){
//         var i;
//         var cItem = c[i];
//         var itemLength = cItem.length;
//         var longestC = Math.max(cItem.length);
//     }
//     if (itemLength == longestC){
//             console.log(cItem);
//         }
// }

// var sampleCountryNames = ["Australia", "Germany", "United States of America"];
// longestCountry(sampleCountryNames);