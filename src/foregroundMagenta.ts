import { foregroundColor } from "./foregroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **magenta** foreground.
 *
 * @category Foreground
 * @example
 * ```typescript
 * foregroundMagenta("Vangware"); // "\x1b[35mVangware\x1b[39m"
 * // It can also be used as a tag function for tagged templates:
 * foregroundMagenta`Vangware`; // "\x1b[35mVangware\x1b[39m"
 * ```
 * @returns `input` string with **magenta** foreground.
 */
export const foregroundMagenta = foregroundColor(35);
