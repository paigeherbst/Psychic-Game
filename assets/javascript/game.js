//    var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
        
//     var wins = 0;
//     var losses = 0;
//     var numberGuesses = 9;
//     var guessChoices = [];
//     var computerGuess = [];

//     window.onload = function() {   
//         var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
//         computerGuess.push(computerGuess);
//         console.log(computerGuess[0]);
//     }
    
    
//     document.onkeyup = function(event) {
//             var userGuess = event.key;
//             guessChoices.push(userGuess);
//             console.log(computerGuess[0]);
            
//             //var options = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        
           
//         //document.getElementById("computerGuess").textContent = computerGuess;

//                 if ((userGuess === computerGuess[0]) && (numberGuesses > 0)) {
//                         wins++;
//                         numberGuesses = 9;
//                         guessChoices.length = 0;
//                         computerGuess.length = 0;
//                         var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
//                         computerGuess.push(computerGuess);
//                         console.log(computerGuess[0]);
                        
//                     }

//                     else if (userGuess !== computerGuess[0] && (numberGuesses > 0)) {
//                         numberGuesses = numberGuesses -1;
                        
//                     }

//                     else {
//                         losses ++;
//                         numberGuesses = 9;
//                         guessChoices.length = 0;
//                         computerGuess.length = 0;
//                         var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
//                         computerGuess.push(computerGuess);
//                         console.log(computerGuess[0]);

//                     }
                    
    //  var html=
    //      "<h1> The Psychic Game </h1>" + "<p> Guess what letter I'm thinking of! </p>" + "<p> Wins:" + wins + "</p>" + "<p> Losses: " + losses + "</p>" + "<p> Guesses Left: " + numberGuesses + "</p>" + "<p> Your Guesses so far: " + guessChoices.join(",") + "</p>";
        
    //  document.querySelector("#game").innerHTML = html;
    //var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
        
    var wins = 0;
    var losses = 0;
    var numberGuesses = 9;
    var guessChoices = [];
    var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    

    document.onkeyup = function(event) {

        var userGuess = String.fromCharCode(event.keycode).toLowerCase();
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        guessChoices.push(userGuess);
            
            if (userGuess === computerGuess) {
                wins ++;
                alert("Good Job! Keep playing :)");
                numberGuesses = 9;
                guessChoices.length = 0;
            }

            else if (numberGuesses == 0) {
                losses ++;
                alert("Keep playing, try again!")
                numberGuesses = 9;
                guessChoices.length = 0;
            }
            
            else if (userGuess !== computerGuess) {
                numberGuesses--;
            }
            
            var html="<h1> The Psychic Game </h1>" + 
            "<p> Guess what letter I'm thinking of! </p>" + 
            "<p> Wins:" + wins + "</p>" + 
            "<p> Losses: " + losses + "</p>" + 
            "<p> Guesses Left: " + 
            numberGuesses + "</p>" + 
             "<p> Your Guesses so far: " + 
             guessChoices.join(",") + 
            "</p>";
        
     document.querySelector("#wordguessgame").innerHTML = html;

    }