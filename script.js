const box = document.getElementById('box');
const scoreDisplay = document.getElementById('score');
const speedSlider = document.getElementById('speed');
const speedValue = document.getElementById('speed-value');
let score = 0;
let intervalId;
let boxSpeed = 1000; // Initial speed (in milliseconds)

// Function to generate random position within game container
function getRandomPosition() {
    const container = document.querySelector('.game-container');
    const x = Math.floor(Math.random() * (container.clientWidth - box.clientWidth));
    const y = Math.floor(Math.random() * (container.clientHeight - box.clientHeight));
    return { x, y };
}

// Function to move the box to a new random position
function moveBox() {
    const { x, y } = getRandomPosition();
    box.style.left = `${x}px`;
    box.style.top = `${y}px`;
}

// Function to update the score
function updateScore() {
    score += 1;
    scoreDisplay.textContent = `Score: ${score}`;
}

// Function to update the speed of the box
function updateSpeed() {
    clearInterval(intervalId); // Clear the previous interval
    boxSpeed = parseInt(speedSlider.value);
    speedValue.textContent = `${boxSpeed} ms`;
    intervalId = setInterval(moveBox, boxSpeed); // Set a new interval with the updated speed
}

// Add event listener for box clicks
box.addEventListener('click', () => {
    console.log('Box clicked'); // Debug statement
    updateScore();
    moveBox();
});

// Add event listener for speed slider
speedSlider.addEventListener('input', updateSpeed);

// Initialize the game
moveBox();
intervalId = setInterval(moveBox, boxSpeed); // Start with initial speed

// Ensure click events are working by logging the click event
document.addEventListener('click', (event) => {
    if (event.target === box) {
        console.log('Box clicked from document listener'); // Debug statement
    }
});
