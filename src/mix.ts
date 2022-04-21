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
 * redTextWhiteBackground("Vangware");
 * // It can also be used as a tag function for tagged templates:
 * redTextWhiteBackground`Vangware`;
 * ```
 * @param formatters Array of formatters to be composed.
 * @returns Formatter composed of the given formatters.
 */
export const mix =
	(formatters: ReadOnlyArray<Formatter>): Formatter =>
	/**
	 * Function with formatters set in context.
	 *
	 * @example
	 * ```ts
	 * redTextWhiteBackground("Vangware");
	 * // It can also be used as a tag function for tagged templates:
	 * redTextWhiteBackground`Vangware`;
	 * ```
	 * @param input String or template string.
	 * @param values Possible values passed to the template string.
	 * @returns Formatted string.
	 */
	(input, ...values) =>
		formatters.reduce(
			(output, formatter) => formatter(output, ...values),
			input as string,
		);
