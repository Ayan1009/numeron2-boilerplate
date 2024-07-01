// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

// Iteration 3: Creating variables required to make the game functional

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

// Iteration 5: Creating a randomise function to make the game functional

// Iteration 6: Making the Operators (button) functional

// Iteration 7: Making Timer functional

let number1, number2, number3;
let correctOperator;
let score = 0;

// Function to generate valid numbers and operator
function generateNumbersAndOperator() {
    number1 = Math.floor(Math.random() * 101);
    number2 = Math.floor(Math.random() * 101);

    const operators = ['plus', 'minus', 'mul', 'divide', 'modulus'];
    correctOperator = operators[Math.floor(Math.random() * operators.length)];

    switch (correctOperator) {
        case 'plus':
            number3 = number1 + number2;
            break;
        case 'minus':
            number3 = number1 - number2;
            break;
        case 'mul':
            number3 = number1 * number2;
            break;
        case 'divide':
            if (number2 === 0) {
                return generateNumbersAndOperator(); // Avoid division by zero
            }
            number3 = number1 / number2;
            break;
        case 'modulus':
            if (number2 === 0) {
                return generateNumbersAndOperator(); // Avoid modulus by zero
            }
            number3 = number1 % number2;
            break;
    }

    // Display the numbers on the game screen
    document.getElementById('number1').innerText = number1;
    document.getElementById('number2').innerText = number2;
    document.getElementById('number3').innerText = number3;
}

// Function to check if the chosen operator is correct
function checkOperator(op) {
    if (op === correctOperator) {
        score++;
        resetTimer();
        generateNumbersAndOperator(); // Generate new numbers and operator
    } else {
        localStorage.setItem('score', score);
        window.location.href = 'gameover.html'; // Redirect to game over page
    }
}

// Make the operator buttons functional
document.getElementById('plus').addEventListener('click', function() { checkOperator('plus'); });
document.getElementById('minus').addEventListener('click', function() { checkOperator('minus'); });
document.getElementById('mul').addEventListener('click', function() { checkOperator('mul'); });
document.getElementById('divide').addEventListener('click', function() { checkOperator('divide'); });
document.getElementById('modulus').addEventListener('click', function() { checkOperator('modulus'); });

// Timer functionality
let timer = document.getElementById('timer');
let timeLeft = 20;
let timerInterval;

function updateTimer() {
    timer.innerText = timeLeft;
    if (timeLeft > 0) {
        timeLeft--;
    } else {
        localStorage.setItem('score', score);
        window.location.href = 'gameover.html'; // Redirect to game over page
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    timeLeft = 20;
    timerInterval = setInterval(updateTimer, 1000);
}

// Initialize game
generateNumbersAndOperator();
resetTimer();
