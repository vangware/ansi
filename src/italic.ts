import { optionalFormat } from "./optionalFormat.js";

/**
 * Takes an `input` string and adds the ANSI codes for **italic** text.
 *
 * @category Text
 * @example
 * ```typescript
 * italic("Vangware"); // "\x1b[3mVangware\x1b[23m"
 * // It can also be used as a tag function for tagged templates:
 * italic`Vangware`; // "\x1b[3mVangware\x1b[23m"
 * ```
 * @returns `input` string with **italic** format.
 */
export const italic = optionalFormat(23)(3);
