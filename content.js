function Tick() {
	let element = document.querySelector('div.top-banner-container');
	if (element)
	{
		element.style.display = 'none';
		// console.log('tick...')
		clearInterval(timer);
		timer = setInterval(() => {
			Tick();
		}, 1000);
	}
}

let timer = setInterval(() => {
	Tick();
}, 50);

document.addEventListener('load', Tick);

