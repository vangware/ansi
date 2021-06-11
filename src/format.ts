import { ansi } from "./ansi";

/**
 * Given an `open`, a `close` value and a `source` string, return formatted
 * `source` (surrounded by `open` and `close`).
 *
 * @category Common
 * @param close Close value.
 * @returns Curried function with `close` in context.
 */
export const format =
	(close: number) =>
	/**
	 * @param open Open value.
	 * @returns Curried function with `open` and `close` in context.
	 */
	(open: number) =>
	/**
	 * @param source Source string to be wrapped by `open` and `close`.
	 * @returns Formatted `source`.
	 */
	(source: string) =>
		`${ansi(open)}${source}${ansi(close)}`;
