import { optionalFormat } from "./optionalFormat.js";

/**
 * Takes an `input` string and adds the ANSI codes for **inverse** text.
 *
 * @category Text
 * @example
 * ```typescript
 * inverse("Vangware"); // "\x1b[7mVangware\x1b[27m"
 * // It can also be used as a tag function for tagged templates:
 * inverse`Vangware`; // "\x1b[7mVangware\x1b[27m"
 * ```
 * @returns `input` string with **inverse** format.
 */
export const inverse = optionalFormat(27)(7);
