import { format } from "./format.js";
import { formattingEnabled } from "./formattingEnabled.js";
import { normalizeString } from "./normalizeString.js";

/**
 * Impure version of `format` which changes depending on the current NodeJS
 * `globalThis.process` environment.
 *
 * @category Common
 * @example
 * ```typescript
 * // In a environment with color:
 * optionalFormat(42)(13)("Vangware"); // "\x1b[42mVangware\x1b[13m"
 * // In an environment without color:
 * optionalFormat(42)(13)("Vangware"); // "Vangware"
 * // It also works with tagged templates:
 * optionalFormat(42)(13)`Vangware`; // "\x1b[42mVangware\x1b[13m"
 * ```
 * @param process NodeJS `globalThis.process`.
 * @returns Either the formatted string, or just the passed string.
 */
export const optionalFormat = (formattingEnabled(globalThis.process)
	? format
	: (_close: number) => (_open: number) =>
			normalizeString) as unknown as typeof format;
