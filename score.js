// Iteration 8: Making scoreboard functional

document.addEventListener('DOMContentLoaded', function() {
    let score = localStorage.getItem('score');
    document.getElementById('score-board').innerText = score ? score : 0;

    document.getElementById('play-again-button').addEventListener('click', function() {
        localStorage.setItem('score', 0); 
        window.location.href = 'index.html';
    });
});

