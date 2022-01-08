import { foregroundColor } from "./foregroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **bright red**
 * foreground.
 *
 * @category Foreground
 * @example
 * ```typescript
 * foregroundBrightRed("Vangware"); // "\x1b[91mVangware\x1b[39m"
 * // It can also be used as a tag function for tagged templates:
 * foregroundBrightRed`Vangware`; // "\x1b[91mVangware\x1b[39m"
 * ```
 * @returns `input` string with **bright red** foreground.
 */
export const foregroundBrightRed = foregroundColor(91);
