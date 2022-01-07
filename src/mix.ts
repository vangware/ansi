import type { ReadOnlyArray } from "@vangware/types";
import type { Formatter } from "./Formatter.js";

/**
 * Composes formatters.
 *
 * @category Common
 * @example
 * ```ts
 * const redTextWhiteBackground = mix([foregroundRed, backgroundWhite]);
 *
 * redTextWhiteBackground("Foo"); // "\x1b[47m\x1b[31mFoo\x1b[39m\x1b[49m"
 * redTextWhiteBackground("Bar"); // "\x1b[47m\x1b[31mBar\x1b[39m\x1b[49m"
 * ```
 * @param formatters Array of formatters to be composed.
 */
export const mix =
	(formatters: ReadOnlyArray<Formatter>): Formatter =>
	/**
	 * @param input String or template string.
	 * @param values Possible values passed to the template string.
	 */
	(input, ...values) =>
		formatters.reduce(
			(output, formatter) => formatter(output, ...values),
			input as string,
		);
