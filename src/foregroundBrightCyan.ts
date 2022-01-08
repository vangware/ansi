import { foregroundColor } from "./foregroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **bright cyan**
 * foreground.
 *
 * @category Foreground
 * @example
 * ```typescript
 * foregroundBrightCyan("Vangware"); // "\x1b[96mVangware\x1b[39m"
 * // It can also be used as a tag function for tagged templates:
 * foregroundBrightCyan`Vangware`; // "\x1b[96mVangware\x1b[39m"
 * ```
 * @returns `input` string with **bright cyan** foreground.
 */
export const foregroundBrightCyan = foregroundColor(96);
