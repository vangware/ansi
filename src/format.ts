import type { ReadOnlyArray } from "@vangware/types";
import { ansi } from "./ansi.js";
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
	<Open extends number>(open: Open) =>
	(
		input: Readonly<TemplateStringsArray> | string,
		...expressions: ReadOnlyArray
	) =>
		`${ansi(open)}${normalizeString(input, ...expressions)}${ansi(close)}`;
