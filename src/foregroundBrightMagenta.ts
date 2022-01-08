import { foregroundColor } from "./foregroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **bright magenta**
 * foreground.
 *
 * @category Foreground
 * @example
 * ```typescript
 * foregroundBrightMagenta("Vangware"); // "\x1b[95mVangware\x1b[39m"
 * // It can also be used as a tag function for tagged templates:
 * foregroundBrightMagenta`Vangware`; // "\x1b[95mVangware\x1b[39m"
 * ```
 * @returns `input` string with **bright magenta** foreground.
 */
export const foregroundBrightMagenta = foregroundColor(95);
