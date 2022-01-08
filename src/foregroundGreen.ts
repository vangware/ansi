import { foregroundColor } from "./foregroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **green** foreground.
 *
 * @category Foreground
 * @example
 * ```typescript
 * foregroundGreen("Vangware"); // "\x1b[32mVangware\x1b[39m"
 * // It can also be used as a tag function for tagged templates:
 * foregroundGreen`Vangware`; // "\x1b[32mVangware\x1b[39m"
 * ```
 * @returns `input` string with **green** foreground.
 */
export const foregroundGreen = foregroundColor(32);
