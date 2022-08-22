import { format } from "./format.js";
import { normalizeString } from "./normalizeString.js";

// We try to get `process` from `globalThis`
const { process: { env, stdout } = {} } = globalThis as Partial<
	typeof globalThis
>;

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
export const optionalFormat = ((env?.NODE_DISABLE_COLORS ?? "") === "" &&
env?.NO_COLOR === undefined &&
env?.TERM !== "dumb" &&
((env?.FORCE_COLOR ?? "1") !== "0" || (stdout?.isTTY ?? false))
	? format
	: () => () => normalizeString) as unknown as typeof format;
