import type { ReadOnlyArray } from "@vangware/types";

/**
 * Formatter function that takes a string or a tagged template.
 *
 * @category Common
 * @param input Array of strings for template strings or a single string.
 * @param expressions Array of expressions (if any).
 * @returns A plain string.
 */
export type Formatter = (
	input: Readonly<TemplateStringsArray> | string,
	...expressions: ReadOnlyArray
) => string;
