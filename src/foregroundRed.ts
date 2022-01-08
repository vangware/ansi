import { foregroundColor } from "./foregroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **red** foreground.
 *
 * @category Foreground
 * @example
 * ```typescript
 * foregroundRed("Vangware"); // "\x1b[31mVangware\x1b[39m"
 * // It can also be used as a tag function for tagged templates:
 * foregroundRed`Vangware`; // "\x1b[31mVangware\x1b[39m"
 * ```
 * @returns `input` string with **red** foreground.
 */
export const foregroundRed = foregroundColor(31);
