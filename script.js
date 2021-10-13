let time = 0;

const currentTime = document.querySelector('.time');
const button = document.querySelector('.start');

button.addEventListener('click', () => {
	setInterval(() => {
		time += 0.1;

		currentTime.innerText = time.toFixed(1);
	}, 100);
});
