import type { Formatter } from "./Formatter.js";

/**
 * Takes a string or a template string and returns a plain string.
 *
 * @category Common
 * @example
 * ```ts
 * normalizeString(`Hello ${13}!`); // "Hello 13!"
 * normalizeString`Hello ${13}!`; // "Hello 13!"
 * ```
 * @see {@link Formatter}
 * @see [Tagged templates](https://mdn.io/Tagged%20templates)
 *
 * @param input String or template string.
 * @param expressions Possible values passed to the template string.
 * @returns Plain string.
 */
export const normalizeString: Formatter = (input, ...expressions) =>
	typeof input === "string"
		? input
		: input
				.flatMap((string, index) => [string, expressions[index] ?? ""])
				.join("");
