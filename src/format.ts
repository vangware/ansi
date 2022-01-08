import { ansi } from "./ansi.js";
import type { Formatter } from "./Formatter.js";
import { normalizeString } from "./normalizeString.js";

/**
 * Given an `open`, a `close` value and an `input` string, return formatted
 * `input` (surrounded by `open` and `close`).
 *
 * @category Common
 * @example
 * ```typescript
 * format(13)(42)("Vangware"); // "\x1b[42mVangware\x1b[13m"
 * // It can also be used as a tag function for tagged templates:
 * format(13)(42)`Vangware`; // "\x1b[42mVangware\x1b[13m"
 * ```
 * @param close Close value.
 * @returns Curried function with `close` in context.
 */
export const format =
	<Close extends number>(close: Close) =>
	/**
	 * Function {@link format} with `close` string set.
	 *
	 * @example
	 * ```typescript
	 * const close13 = format(13);
	 *
	 * close13(42)("Vangware"); // "\x1b[42mVangware\x1b[13m"
	 * // It can also be used as a tag function for tagged templates:
	 * close13(42)`Vangware`; // "\x1b[42mVangware\x1b[13m"
	 * ```
	 * @param open Open value.
	 * @returns Curried function with `open` and `close` in context.
	 */
	<Open extends number>(open: Open): Formatter =>
	/**
	 * Function {@link format} with `open` and `close` strings set.
	 *
	 * @example
	 * ```typescript
	 * const close13 = format(13);
	 * const close13Open42 = format13(42);
	 *
	 * close13Open42("Vangware"); // "\x1b[42mVangware\x1b[13m"
	 * // It can also be used as a tag function for tagged templates:
	 * close13Open42`Vangware`; // "\x1b[42mVangware\x1b[13m"
	 * ```
	 * @param input Input `string` or `TemplateStringsArray`.
	 * @param expressions Possible values passed to the template string.
	 * @returns The `input` wrapped with `open` and `close`.
	 */
	(input, ...expressions) =>
		`${ansi(open)}${normalizeString(input, ...expressions)}${ansi(close)}`;
