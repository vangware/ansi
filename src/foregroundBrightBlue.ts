import { foregroundColor } from "./foregroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **bright blue**
 * foreground.
 *
 * @category Foreground
 * @example
 * ```typescript
 * foregroundBrightBlue("Vangware"); // "\x1b[94mVangware\x1b[39m"
 * // It can also be used as a tag function for tagged templates:
 * foregroundBrightBlue`Vangware`; // "\x1b[94mVangware\x1b[39m"
 * ```
 * @returns `input` string with **bright blue** foreground.
 */
export const foregroundBrightBlue = foregroundColor(94);
