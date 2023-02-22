import type { ReadOnlyArray } from "@vangware/types";

/**
 * Formatter function that takes a string or a tagged template.
 *
 * @category Common
 * @param input Array of strings for template strings or a single string,\
 * followed by an array of expressions (if any).
 * @returns A plain string.
 */
export type Formatter = (
	...input: readonly [
		Readonly<TemplateStringsArray> | string,
		...ReadOnlyArray,
	]
) => string;
