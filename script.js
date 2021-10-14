let interval;
let time = 0;

const timeElement = document.querySelector('.seconds');
const timeListElement = document.querySelector('.times');
const controlButton = document.querySelector('.control');
const lapButton = document.querySelector('.lap');

const setTime = (callback) => {
	time = callback(time);

	timeElement.innerText = time.toFixed(1);
};

const start = () => {
	timeListElement.innerHTML = '';
	setTime(() => 0);

	interval = setInterval(() => setTime((time) => time + 0.1), 100);
};

const stop = () => {
	clearInterval(interval);
};

const toggleButton = (current) => {
	const text = current === 'Spustit' ? 'Zastavit' : 'Spustit';
	const func = current === 'Spustit' ? stop : start;

	controlButton.innerText = text;
	controlButton.onclick = func;
};

const lap = () => {
	const entry = document.createElement('li');

	entry.innerText = `${time.toFixed(1)}s`;
	timeListElement.prepend(entry);
};

controlButton.onclick = start;
controlButton.addEventListener('click', () => toggleButton(controlButton.innerText));
lapButton.addEventListener('click', lap);
