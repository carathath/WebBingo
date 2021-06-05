var ranNum = new Array(25); // Array that will store the values displayed on the game bard
var ballDrawn = new Array(76); // Will store the game balls already played
ballDrawn[0] = 0; // Initialize the first value in the array
var counter = 0; // Keeps track of how many balls have been played
var bcounter = 0; // Used to keep track of hits in column b
var icounter = 0; // Used to keep track of hits in column i
var ncounter = 0; // Used to keep track of hits in column n
var gcounter = 0; // Used to keep track of hits in column g
var ocounter = 0; // Used to keep track of hits in column o
var hGameCounter = 0; // Used to keep track of hits in H-pattern Bingo
var lGameCounter = 0; // Used to keep track of hits in L-pattern Bingo
var zGameCounter = 0; // Used to keep track of hits in Z-pattern Bingo
var nGameCounter = 0; // Used to keep track of hits in N-patterm Bingo
var gameType = "x"; // Stores game type name

function fillBoard(){
    var game = document.getElementById("game-type"); // What game type are we playing
    gameType = game.value; // Get the value of the option
    console.log(gameType); // Display what game type has been chosen

    // If the user leaves the option on "--Select--"
    if(gameType == "blank"){
        alert("You must choose a game type!");
        return;
    }

    document.getElementById("begin-button-div").style.display = "none"; // Hide "Begin" button when clicked
    document.getElementById("game-board").style.display = "block"; // Display board
    document.getElementById("play-button-div").style.display = "block"; // Display "Get Play" button

    var num = 0; // Used as number index for cell ID's
    var x = 0; // Used for loops

    randomNumberGenerator(ranNum, 1, 15, 0); // Random numbers 1-15
    randomNumberGenerator(ranNum, 16, 30, 5); // Random numbers 16-30
    randomNumberGenerator(ranNum, 31, 45, 10); // Random numbers 31-45
    randomNumberGenerator(ranNum, 46, 60, 15); // Random number 46-60
    randomNumberGenerator(ranNum, 61, 75, 20); // Random number 61-75
    
    for(x = 0; x < 5; x++){
        // Display values on the B column
        document.getElementById('b' + String(num + 1)).innerHTML = ranNum[x];
        num++; // Move to the next cell index
    }
    num = 0; // Reset the cell index

    for(x = 5; x < 10; x++){
        //Display values on the I column
        document.getElementById('i' + String(num+1)).innerHTML = ranNum[x];
        num++; // Move to the next cell index
    }
    num = 0; // Reset the next cell index

    for(x = 10; x < 15; x++){
        // Display the values on the N column
        document.getElementById('n' + String(num+1)).innerHTML = ranNum[x];
        num++; // Move to the next cell index
    }
    num = 0; // Reset the cell index

    for(x = 15; x < 20; x++){
        // Display the values on the N column
        document.getElementById('g' + String(num+1)).innerHTML = ranNum[x];
        num++; // Move to the next cell index
    }
    num = 0; // Reset the cell index

    for(x = 20; x < 25; x++){
        // Display the values on the O column
        document.getElementById('o' + String(num+1)).innerHTML = ranNum[x];
        num++; // Move to the next cell index
    }
}

function randomNumberGenerator(ranNum, min, max, start){
    // Start at the index value of the array. We only need 5 numbers to fill a column
    for (var i = start; i < start + 5; i++){
        var check = 0; // Used to check if random number already appeared
        // Assign random number to check between the two bounds
        check = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(check); // Display random number in the console

        if(i == start){ // If it is the first draw, add it to the array
            ranNum[i] = check;
        } else if(i >= start+1){ // After we add the first number to the array
            var use = 0; // Acts a a flag for when a duplicate is found

            while(use == 0){
                if(ranNum.includes(check)==true){ // If a duplicate is found in the array
                    console.log(String(check) + " found in random number array");
                    check = Math.floor(Math.random() * (max - min + 1)) + min; // Get a new random number
                    console.log("New number is: " + String(check));
                    // Repeat the WHILE loop
                } else{
                    // No duplicate found
                    ranNum[i] = check; // Add the number to the array
                    use = 1; // Break out of the WHILE loop
                }
            }
        }    
    }
}

function checkBingo(column, count){
    if(gameType == "original"){
        if(count == 5){ // If column is full
            var let = column.toLowerCase(); // Used to access the cells ID in the HTML code
            colorTheBingo(let); // Calls the function to add visual effect to the completed column
            alert("You Win! Bingo on the " + column + " column!") // Alert the user
            // Hide the "Next Play" button as game is over
            document.getElementById("play-button-div").style.display = "none";
        }
    } else if(gameType == "h-bingo"){
        if(hGameCounter == 13){ // If H-pattern has been met
            // Letter has no specific meaning but used to satisfy function necessities
            colorTheBingo("h");
            alert("You Win! H-Bingo!") // Alert the user
            // Hide the "Next Play" button as game is over
            document.getElementById("play-button-div").style.display = "none";
        }
    } else if(gameType == "l-bingo"){
        if(lGameCounter == 9){ // If L-pattern has been met
            // Letter has no specific meaning but used to satisfy function necessities
            colorTheBingo("l");
            alert("You Win! L-Bingo!") // Alert the user
            // Hide the "Next Play" button as game is over
            document.getElementById("play-button-div").style.display = "none";
        }
    } else if(gameType == "z-bingo"){
        if(zGameCounter == 13){ // If Z-pattern has been met
            // Letter has no specific meaning but used to satisfy function necessities
            colorTheBingo("z");
            alert("You Win! Z-Bingo!") // Alert the user
            // Hide the "Next Play" button as game is over
            document.getElementById("play-button-div").style.display = "none";
        }
    } else if(gameType == "n-bingo"){
        if(nGameCounter == 13){ // If N-pattern has been met
            // Letter has no specific meaning but used to satisfy function necessities
            colorTheBingo("n");
            alert("You Win! N-Bingo!") // Alert the user
            // Hide the "Next Play" button as game is over
            document.getElementById("play-button-div").style.display = "none";
        }
    }
}

// When user clicks the "Get Play" button
function getPlay(){
    // Change text from "Get Play" to "Next Play"
    document.getElementById("play-button").innerHTML = "Next Play";
    var check = 0; // Gets assigned to random number generated
    var use = 0; // Used as duplicate flag
    check = Math.floor(Math.random() * (75)) + 1; // Get random number from 1 - 75

    while(use == 0){
        // If the random number has already been drawn
        if(ballDrawn.includes(check)==true){
            console.log("Found in played balls: " + String(check));
            check = Math.floor(Math.random() * (75)) + 1; // Assign a new value
            console.log("New draw is: " + String(check));
            // Repeat the WHILE loop
        } else{
            // If there is no duplicate
            ballDrawn[counter] = check; // Add the value to the ballDrawn array
            counter++; // Add to th counter
            console.log("Number of Plays: " + counter); // Output number of plays
            use = 1; // Turn on flag to exit the WHILE loop
        }
    }

    var genNum = String(check); // Turn random number into a STRING for comparison to the HTML text
    console.log(genNum); // Outputs to check if it is a string
    
    // If the random number is between 1 and 15 (B column)
    if(check >= 1 && check <= 15){
        // Display B and random generated number
        document.getElementById("nextPlay").innerHTML = "Ball Drawn: B" + genNum;

        // If the random number matches cell b1
        if(genNum == document.getElementById("b1").innerHTML){
            // Add to the cell the following classes
            document.getElementById("b1").className += " hit animate__animated animate__backInLeft";
            bcounter++; hGameCounter++; lGameCounter++; zGameCounter++; nGameCounter++;
        } else if(genNum == document.getElementById("b2").innerHTML){ // If random number matches cell b2
            document.getElementById("b2").className += " hit animate__animated animate__backInLeft";
            bcounter++; hGameCounter++; lGameCounter++; nGameCounter++;
        } else if(genNum == document.getElementById("b3").innerHTML){ // If random number matches cell b3
            document.getElementById("b3").className += " hit animate__animated animate__backInLeft";
            bcounter++; hGameCounter++; lGameCounter++; nGameCounter++;
        } else if(genNum == document.getElementById("b4").innerHTML){ // If random number matches cell b4
            document.getElementById("b4").className += " hit animate__animated animate__backInLeft";
            bcounter++; hGameCounter++; lGameCounter++; nGameCounter++;
        } else if(genNum == document.getElementById('b5').innerHTML){ // If random number matches cell b5
            document.getElementById("b5").className += " hit animate__animated animate__backInLeft";
            bcounter++; hGameCounter++; lGameCounter++; zGameCounter++; nGameCounter++;
        }

        checkBingo("B", bcounter);

    } else if(check >= 16 && check <=30){ // If random number is between 16 and 30 (I column)
        // Display I and random number
        document.getElementById("nextPlay").innerHTML = "Ball Drawn: I" + genNum;

        if(genNum == document.getElementById("i1").innerHTML){ // If random number matches cell i1
            document.getElementById("i1").className +=" hit animate__animated animate__bounceInUp";
            icounter++; zGameCounter++
        } else if(genNum == document.getElementById('i2').innerHTML){ // If random number matches cell i2
            document.getElementById("i2").className += " hit animate__animated animate__bounceInUp";
            icounter++; nGameCounter++;
        } else if(genNum == document.getElementById('i3').innerHTML){ // If random number matches cell i3
            document.getElementById("i3").className += " hit animate__animated animate__bounceInUp";
            icounter++; hGameCounter++;
        } else if(genNum == document.getElementById("i4").innerHTML){ // If random number matches cell i4
            document.getElementById("i4").className += " hit animate__animated animate__bounceInUp";
            icounter++; zGameCounter++
        } else if(genNum == document.getElementById("i5").innerHTML){ // If random number matches cell i5
            document.getElementById("i5").className += " hit animate__animated animate__bounceInUp";
            icounter++; lGameCounter++; zGameCounter++;
        }

        checkBingo("I", icounter);

    } else if(check >= 31 && check <= 45){ // If random number is between 31 and 45 (N column)
        // Display N and random number
        document.getElementById("nextPlay").innerHTML = "Ball Drawn: N" + genNum;

        if(genNum == document.getElementById("n1").innerHTML){ // If random number matches cell n1
            document.getElementById("n1").className += " hit animate__animated animate__backInUp";
            ncounter++; zGameCounter++;
        } else if(genNum == document.getElementById('n2').innerHTML){ // If random number matches cell n2
            document.getElementById("n2").className += " hit animate__animated animate__backInUp";
            ncounter++; 
        } else if(genNum == document.getElementById('n3').innerHTML){ // If random number matches cell n3
            document.getElementById("n3").className += " hit animate__animated animate__backInUp";
            ncounter++; hGameCounter++; zGameCounter++; nGameCounter++;
        } else if(genNum == document.getElementById('n4').innerHTML){ // If random number matches cell n4
            document.getElementById("n4").className += " hit animate__animated animate__backInUp";
            ncounter++;
        } else if(genNum == document.getElementById("n5").innerHTML){ // If random number matches cell n5
            document.getElementById("n5").className += " hit animate__animated animate__backInUp";
            ncounter++; lGameCounter++; zGameCounter++;
        }

        checkBingo("N", ncounter);

    } else if(check >= 46 && check <=60){ // If random number is between 46 and 60
        // Display G and random number
        document.getElementById("nextPlay").innerHTML = "Ball Drawn: G" + genNum;

        if(genNum == document.getElementById("g1").innerHTML){ // If random number matches cell g1
            document.getElementById("g1").className += " hit animate__animated animate__fadeInUp";
            gcounter++; zGameCounter++;
        } else if(genNum == document.getElementById("g2").innerHTML){ // If random number matches cell g2
            document.getElementById("g2").className += " hit animate__animated animate__fadeInUp";
            gcounter++; zGameCounter++;
        } else if(genNum == document.getElementById('g3').innerHTML){ // If random number matches cell g3
            document.getElementById("g3").className += " hit animate__animated animate__fadeInUp";
            gcounter++; hGameCounter++;
        } else if(genNum == document.getElementById("g4").innerHTML){ // If random number matches cell g4
            document.getElementById("g4").className += " hit animate__animated animate__fadeInUp";
            gcounter++; nGameCounter++;
        } else if(genNum == document.getElementById("g5").innerHTML){ // If random number matches cell g5
            document.getElementById("g5").className += " hit animate__animated animate__backInLeft";
            gcounter++; lGameCounter++; zGameCounter++;
        }

        checkBingo("G", gcounter);

    } else if(check >= 61 && check <= 75){ // If random number is between 61 and 75
        // Display O and random number
        document.getElementById("nextPlay").innerHTML = "Ball Drawn: O" + genNum;

        if(genNum == document.getElementById("o1").innerHTML){ // If random number matches cell o1
            document.getElementById("o1").className += " hit animate__animated animate__backInRight";
            ocounter++; hGameCounter++; zGameCounter++; nGameCounter++;
        } else if(genNum == document.getElementById("o2").innerHTML){ // If random number matches cell o2
            document.getElementById("o2").className += " hit animate__animated animate__backInRight";
            ocounter++; hGameCounter++; nGameCounter++;
        } else if(genNum == document.getElementById("o3").innerHTML){ // If random number matches cell o3
            document.getElementById("o3").className += " hit animate__animated animate__backInRight";
            ocounter++; hGameCounter++; nGameCounter++;
        } else if(genNum == document.getElementById("o4").innerHTML){ // If random number matches cell o4
            document.getElementById("o4").className += " hit animate__animated animate__backInRight";
            ocounter++; hGameCounter++; nGameCounter++;
        } else if(genNum == document.getElementById("o5").innerHTML){ // If random number matches cell o5
            document.getElementById("o5").className += " hit animate__animated animate__backInRight";
            ocounter++; hGameCounter++; lGameCounter++; zGameCounter++; nGameCounter++;
        }

        checkBingo("O", ocounter);

    } else{
        // If number is not between 1 and 75 for some reason
        alert("Number out of range: " + genNum);
    }

    if(counter >= 75){ // If all balls have been drawn
        alert("Game Over. All balls have been played");
    }
}

function colorTheBingo(let){
    var i = 0; // Used for the FOR loops
    var index = 0; // Used for horiontal travel on the board
    var arr = new Array(5); // Used to store the letters to tranverse the board
    arr[0] = "b"; arr[1] = "i"; arr[2] = "n"; arr[3] = "g"; arr[4] = "o";

    if(gameType == "original"){ // If you get a traditional bingo (full column)
        for(i = 1; i <= 5; i++){
            // Apply visual effect to the completed column
            document.getElementById(let + String(i)).className = " colorChange";
        }
    } else if(gameType == "h-bingo"){ // H-pattern on the board has been filled
        for(i = 0; i < 5; i++){
            // Add visual effect to the B column
            document.getElementById("b" + String(index + 1)).className = " colorChange";
            // Add visual effect to the O column
            document.getElementById("o" + String(index + 1)).className = " colorChange";
            index++; // Used to scale the cells from top to bottom
        }

        for(i = 1; i < 4; i++){
            // Add visual effect to the horizontal of columns I, N and G
            document.getElementById(arr[i] + "3").className = " colorChange";
        }

    } else if(gameType == "l-bingo"){ // L-pattern on the board has been filled
        for(i = 0; i < 5; i++){
            // Add visual effect to the B column
            document.getElementById("b" + String(index + 1)).className = " colorChange";
            index++; // Used to scale the cells from top to bottom
        }

        for(i = 1; i < 5; i++){
            // Add visual effect to the bottom row, starting at column I
            document.getElementById(arr[i] + "5").className = " colorChange";
        }

    } else if(gameType == "z-bingo"){ // Z-pattern on the board has been filled
        for(i = 0; i < 5; i++){
            // Add visual effect to the top row
            document.getElementById(arr[i] + "1").className = " colorChange";
            // Add visual effect to the bottom row
            document.getElementById(arr[i] + "5").className = " colorChange";
        }
        
        index = 2; // Starting at the second row
        for(i = 3; i > 0; i--){
            // Add visual effect starting at column G, row 2
            // Work your way down to the bottom left corner, until you reach column I
            document.getElementById(arr[i] + String(index)).className = " colorChange";
            index++;
        }
    } else if(gameType == "n-bingo"){ // N-pattern on the board has been filled
        for(i = 0; i < 5; i++){
            // Add visual effect to the B column
            document.getElementById("b" + String(index + 1)).className = " colorChange";
            // Add visual effect to the O column
            document.getElementById("o" + String(index + 1)).className = " colorChange";
            index++; // Used to scale the cells from top to bottom
        }

        index = 2; // Starting at the second row
        for(i = 1; i < 4; i++){
            // Add a visual effect starting at column I, row 2
            // Work your way down to the bottom right corner, until you reach column G
            document.getElementById(arr[i] + String(index)).className = " colorChange";
            index++; // Used to scale the cells horizontally
        }
    }
}