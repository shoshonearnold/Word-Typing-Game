
const levels = {
	easy: 8,
	medium: 5,
	hard: 3,
};

const currentLevel = levels.easy;


let time = currentLevel;
let scoreDisplay = 0;
let isPlaying;
document.getElementById("input").style.visibility = "hidden"; 


//DOM Elements 
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
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
	'subscription',
	'penetrating',
	'influencers',
	'commonwealth',
	'flower',
	'destructional',
	'washington',
	'beetlejuice',
	'manufacture',
	'drill',
	'snare',
	'equipment',
];

function init(e) {
	document.getElementById("input").style.visibility = "visible";
	seconds.innerHTML = currentLevel;
	showWord(words);
	wordInput.addEventListener('input', startMatch);
	setInterval(countdown, 1000);
	setInterval(checkStatus, 50);
}

function startMatch() {
	if(matchWords()) {
		isPlaying = true;
		time = currentLevel + 1;
		showWord(words);
		wordInput.value ='';
	}
}

function matchWords() {
	if (wordInput.value === currentWord.innerHTML) {
			message.innerHTML = 'correct!!!';
			return true;
		} else {
			message.innerHTML = '';
			return false;
		}
}

function showWord(words) {
	const randIndex = Math.floor(Math.random() * words.length);
	currentWord.innerHTML = words[randIndex];
}

function countdown() {
	if(time > 0 ) {
	time--;	
	} else if (time === 0) {
		isPlaying = false;
	}
	timeDisplay.innerHTML = time;
}

function checkStatus() {
	if (!isPlaying && time === 0) {
		message.innerHTML = 'Game Over!!! Click Play Again.';
	}
}

function refresh() {
	window.location.reload(true);
}

