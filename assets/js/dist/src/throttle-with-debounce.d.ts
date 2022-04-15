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
declare const throttleWithDebounce: <F extends (...args: any[]) => unknown>(fn: F, delay: number) => (this: ThisParameterType<F>, ...args: Parameters<F>) => void;
export { throttleWithDebounce };
export default throttleWithDebounce;
