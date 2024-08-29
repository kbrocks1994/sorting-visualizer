// Set up variables and constants
let array = [];
let numBars = document.getElementById('arr_sz').value;
let speed = document.getElementById('speed_input').value;
const barsContainer = document.getElementById('bars');
const arrSizeInput = document.getElementById('arr_sz');
const speedInput = document.getElementById('speed_input');
const newArrayButton = document.getElementById('newArray');
const bubbleSortButton = document.getElementById('bubbleSort');

// Function to generate bars
function generateBars(num) {
    array = [];
    barsContainer.innerHTML = ''; // Clear previous bars

    for (let i = 0; i < num; i++) {
        let value = Math.floor(Math.random() * 100) + 1;
        array.push(value);

        let bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${value}%`;
        barsContainer.appendChild(bar);
    }
}

// Function to swap bars
async function swap(el1, el2) {
    return new Promise(resolve => {
        let temp = el1.style.height;
        el1.style.height = el2.style.height;
        el2.style.height = temp;

        setTimeout(() => {
            resolve();
        }, speed);
    });
}

// Bubble Sort algorithm
async function bubbleSort() {
    let bars = document.querySelectorAll('.bar');
    for (let i = 0; i < bars.length - 1; i++) {
        for (let j = 0; j < bars.length - i - 1; j++) {
            bars[j].style.backgroundColor = 'red';
            bars[j + 1].style.backgroundColor = 'red';

            if (parseInt(bars[j].style.height) > parseInt(bars[j + 1].style.height)) {
                await swap(bars[j], bars[j + 1]);
            }

            bars[j].style.backgroundColor = 'teal';
            bars[j + 1].style.backgroundColor = 'teal';
        }
        bars[bars.length - 1 - i].style.backgroundColor = 'green';
    }
    bars[0].style.backgroundColor = 'green';
}

// Event Listeners
newArrayButton.addEventListener('click', () => generateBars(numBars));
bubbleSortButton.addEventListener('click', bubbleSort);
arrSizeInput.addEventListener('input', (e) => {
    numBars = e.target.value;
    generateBars(numBars);
});
speedInput.addEventListener('input', (e) => {
    speed = 310 - e.target.value; // Adjust speed
});

// Initial setup
window.onload = () => {
    generateBars(numBars);
};
