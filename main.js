//Globals

// Availible Levels
const levels = {
	easy: 8,
	medium: 5,
	hard: 3,
};

// To change Level
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying; 

//DOM Elements 
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const ScoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const startGame = document.querySelector('#startgame');
const restartGame = document.querySelector('#restart-page');

startGame.addEventListener('click', init);
restartGame.addEventListener('click', refresh);


const words = [
	'fun',
	'space',	
	'glass',	
	'mine',
	'block',
	'secret',
	'enormous',
	'unexpectedly',
	'column',
	'mango',
	'miscommunication',
	'hypoteneuse',
	'pavilion',
	'subcription',
	'penetrating',
	'influencers',
	'commonwealth',
	'flower',
	'destructional',
	'washington',
	'beetlejuice',
	'manfacture',
	'drill',
	'snare',
	'equipment',
];

//Initialize Game
function init(e) {
	seconds.innerHTML = currentLevel;
	showWord(words);
	wordInput.addEventListener('input', startMatch);
	setInterval(countdown, 1000);
	setInterval(checkStatus, 50);
}

// Start match
function startMatch() {
	if(matchWords()) {
		isPlaying = true;
		time = currentLevel + 1;
		showWord(words);
		wordInput.value ='';
		score++;
	}
	if (score === -1) {
		scoreDisplay.innerHTML = 0;
	} else {
	scoreDisplay.innerHTML = score;
	}
}

// Match currentWord to wordImput
function matchWords() {
	if (wordInput.value === currentWord.innerHTML) {
		  message.innerHTML = 'correct!!!';
			return true;
		} else {
			message.innerHTML = '';
			return false;
		}
}

//Pick and show random Word
function showWord(words) {
	// Generate random array index
	const randIndex = Math.floor(Math.random() * words.length);
	// Outpost ransom word
	currentWord.innerHTML = words[randIndex];
}

//countdown Timer
function countdown() {
	// Make Sure Time Is Not Run Out
	if(time > 0 ) {
	// Decrement
	time--;	
	} else if (time === 0) {
		isPlaying = false;
	}
	 // Show time
	 timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
	if (!isPlaying && time === 0) {
		message.innerHTML = 'Game Over!!!';
		score = -1;
	}
}

function refresh() {
	window.location.reload(true);
}

