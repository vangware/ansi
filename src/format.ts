import type { Formatter } from "./Formatter.js";
import { normalizeString } from "./normalizeString.js";
import { selectGraphicRendition } from "./selectGraphicRendition.js";

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
	<Open extends number>(open: Open) =>
	(...input: Readonly<Parameters<Formatter>>) =>
		`${selectGraphicRendition(open)}${normalizeString(
			...input,
		)}${selectGraphicRendition(close)}`;
