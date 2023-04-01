import type { Formatter } from "./Formatter.js";
import { normalizeString } from "./normalizeString.js";
import { selectGraphicRendition } from "./selectGraphicRendition.js";

/**
 * Format wrapper function.
 *
 * @category Common
 * @remarks
 * Given an `open`, a `close` string and an `input` string, return formatted
 * `input` (surrounded by `open` and `close`).
 * @example
 * ```typescript
 * format(13)(42)("Vangware"); // "\x1b[42mVangware\x1b[13m"
 * // It can also be used as a tag function for tagged templates:
 * format(13)(42)`Vangware`; // "\x1b[42mVangware\x1b[13m"
 * ```
 * @see {@link Formatter}
 * @see {@link selectGraphicRendition}
 * @see {@link normalizeString}
 *
 * @template Close Close string generic.
 * @param close Close string.
 * @returns Curried function with `close` in context.
 */
export const format =
	<const Close extends number>(close: Close) =>
	/**
	 * {@link format} function with `close` set.
	 * @see {@link format}
	 *
	 * @template Open Open string generic.
	 * @param open Open string.
	 * @returns Curried function with `close` and `open` in context.
	 */
	<const Open extends number>(open: Open): Formatter =>
	/**
	 * {@link format} function with `close` and `open` set.
	 * @see {@link format}
	 *
	 * @param input Input string (`Formatter` arguments).
	 * @returns Formatted `input` string.
	 */
	(...input) =>
		`${selectGraphicRendition(open)}${normalizeString(
			...input,
		)}${selectGraphicRendition(close)}`;
