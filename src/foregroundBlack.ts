import { foregroundColor } from "./foregroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **black** foreground.
 *
 * @category Foreground
 * @example
 * ```typescript
 * foregroundBlack("Vangware"); // "\x1b[30mVangware\x1b[39m"
 * // It can also be used as a tag function for tagged templates:
 * foregroundBlack`Vangware`; // "\x1b[30mVangware\x1b[39m"
 * ```
 * @returns `input` string with **black** foreground.
 */
export const foregroundBlack = foregroundColor(30);
