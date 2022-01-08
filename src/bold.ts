import { optionalFormat } from "./optionalFormat.js";

/**
 * Takes an `input` string and adds the ANSI codes for **bold** text.
 *
 * @category Text
 * @example
 * ```typescript
 * bold("Vangware"); // "\x1b[1mVangware\x1b[22m"
 * // It can also be used as a tag function for tagged templates:
 * bold`Vangware`; // "\x1b[1mVangware\x1b[22m"
 * ```
 * @returns `input` string with **bold** format.
 */
export const bold = optionalFormat(22)(1);
