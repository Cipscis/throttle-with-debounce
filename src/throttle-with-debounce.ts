/**
 * Create a version of fn that will only execute if it
 * hasn't been called successfully within the last delay ms,
 * and will also execute an additional time after it has
 * stopped being called if it was called more than once.
 *
 * This is useful for binding callbacks to events such as
 * scroll or resize.
 *
 * @param {Function} fn - A function to throttle
 * @param {number} delay - The duration to wait before the function can be called again (ms)
 */
const throttleWithDebounce = function<F extends (...args: any[]) => unknown> (fn: F, delay: number) {
	// Use ReturnType<typeof setTimeout> for support across ES and NodeJS environments
	let throttleTimeout: ReturnType<typeof setTimeout> | null = null;
	let debounceTimeout: ReturnType<typeof setTimeout> | null = null;

	return function (this: ThisParameterType<F>, ...args: Parameters<F>): void {
		if (throttleTimeout) {
			if (debounceTimeout) {
				clearTimeout(debounceTimeout);
			}

			debounceTimeout = setTimeout(() => {
				fn.apply(this, args);
				debounceTimeout = null;
			}, delay);
		} else {
			fn.apply(this, args);

			throttleTimeout = setTimeout(() => {
				throttleTimeout = null;
			}, delay);
		}
	};
};

export { throttleWithDebounce };
export default throttleWithDebounce;
