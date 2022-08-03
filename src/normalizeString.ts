import type { ReadOnlyArray } from "@vangware/types";

/**
 * Takes a string or a template string and returns a plain string.
 *
 * @category Common
 * @example
 * ```ts
 * normalizeString(`Hello ${13}!`); // "Hello 13!"
 * normalizeString`Hello ${13}!`; // "Hello 13!"
 * ```
 * @param input String or template string.
 * @param expressions Possible values passed to the template string.
 * @returns Plain string.
 */
export const normalizeString = (
	input: Readonly<TemplateStringsArray> | string,
	...expressions: ReadOnlyArray
) =>
	Array.isArray(input)
		? (input as Readonly<TemplateStringsArray>)
				.flatMap((string, index) => [string, expressions[index] ?? ""])
				.join("")
		: `${input as string}`;
