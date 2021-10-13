let time = 0;
let interval;

const currentTime = document.querySelector('.time');
const timesList = document.querySelector('.times');
const startButton = document.querySelector('.start');
const holdButton = document.querySelector('.hold');
const stopButton = document.querySelector('.stop');

startButton.addEventListener('click', () => {
	startButton.setAttribute('disabled', true);
	stopButton.removeAttribute('disabled');

	time = 0;

	interval = setInterval(() => {
		time += 0.1;

		currentTime.innerText = time.toFixed(1);
	}, 100);

	timesList.innerHTML = '';
});

stopButton.addEventListener('click', () => {
	startButton.removeAttribute('disabled');
	stopButton.setAttribute('disabled', true);

	clearInterval(interval);
});

holdButton.addEventListener('click', () => {
	const item = document.createElement('li');
	item.innerText = time.toFixed(1);
	timesList.prepend(item);
});
