import type { ReadOnlyArray } from "@vangware/types";

/**
 * Type for string or template strings formatters.
 *
 * @category Common
 * @param input Array of strings for template strings or a single string.
 * @param expressions Array of expressions (if any).
 */
export type Formatter = (
	input: Readonly<TemplateStringsArray> | string,
	...expressions: ReadOnlyArray
) => string;
