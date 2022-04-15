 import throttleWithDebounce from '@cipscis/throttle-with-debounce';

const increment = function (this: HTMLElement, e: MouseEvent) {
	e.preventDefault();

	let el = e.target as HTMLElement;
	const activateCountString = el.getAttribute('data-activate-count');

	let activateCount = activateCountString ? parseInt(activateCountString, 10) : 0;

	activateCount += 1;

	el.setAttribute('data-activate-count', activateCount.toString());
};

const throttledWithDebounceIncrementFast = throttleWithDebounce(increment, 200);
const throttledWithDebounceIncrementSlow = throttleWithDebounce(increment, 1000);

document.querySelectorAll<HTMLElement>('.js-throttle-with-debounce-fast').forEach(($el) => $el.addEventListener('click', throttledWithDebounceIncrementFast));
document.querySelectorAll<HTMLElement>('.js-throttle-with-debounce-slow').forEach(($el) => $el.addEventListener('click', throttledWithDebounceIncrementSlow));
