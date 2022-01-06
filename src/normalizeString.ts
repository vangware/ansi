/**
 * Takes a string or a template string and returns a plain string.
 *
 * @category Common
 * @example
 * ```ts
 * normalizeString`Hello ${13}!`; // "Hello 13!"
 * normalizeString(`Hello ${13}!`); // "Hello 13!"
 * ```
 * @param input String or Template String.
 * @param values Possible values passed to the template string.
 * @returns Plain string.
 */
export const normalizeString = <Input extends string>(
	input: Input | TemplateStringsArray,
	...values: ReadonlyArray<unknown>
) =>
	typeof input === "string"
		? input
		: input
				.flatMap((string, index) => [string, values[index] ?? ""])
				.join("");
