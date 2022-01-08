import { foregroundColor } from "./foregroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **bright green**
 * foreground.
 *
 * @category Foreground
 * @example
 * ```typescript
 * foregroundBrightGreen("Vangware"); // "\x1b[92mVangware\x1b[39m"
 * // It can also be used as a tag function for tagged templates:
 * foregroundBrightGreen`Vangware`; // "\x1b[92mVangware\x1b[39m"
 * ```
 * @returns `input` string with **bright green** foreground.
 */
export const foregroundBrightGreen = foregroundColor(92);
