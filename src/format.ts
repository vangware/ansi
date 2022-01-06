import { ansi } from "./ansi.js";
import { normalizeString } from "./normalizeString.js";

/**
 * Given an `open`, a `close` value and an `input` string, return formatted
 * `input` (surrounded by `open` and `close`).
 *
 * @category Common
 * @example
 * ```typescript
 * format(13)(42)("Foo"); // "\x1b[42mFoo\x1b[13m"
 * format(42)(13)("Bar"); // "\x1b[13mBar\x1b[42m"
 * // It can also be used as template tagged function:
 * format(13)(42)`Foo`; // "\x1b[42mFoo\x1b[13m"
 * format(42)(13)`Bar`; // "\x1b[13mBar\x1b[42m"
 * ```
 * @param close Close value.
 * @returns Curried function with `close` in context.
 */
export const format =
	<Close extends number>(close: Close) =>
	/**
	 * @param open Open value.
	 * @returns Curried function with `open` and `close` in context.
	 */
	<Open extends number>(open: Open) =>
	/**
	 * @param input Input string to be wrapped by `open` and `close`.
	 * @returns Formatted `input`.
	 */
	<Input extends string>(
		input: Input | TemplateStringsArray,
		...values: ReadonlyArray<unknown>
	) =>
		`${ansi(open)}${normalizeString(input, ...values)}${ansi(
			close,
		)}` as const;
