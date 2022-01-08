import { foregroundColor } from "./foregroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **bright yellow**
 * foreground.
 *
 * @category Foreground
 * @example
 * ```typescript
 * foregroundBrightYellow("Vangware"); // "\x1b[93mVangware\x1b[39m"
 * // It can also be used as a tag function for tagged templates:
 * foregroundBrightYellow`Vangware`; // "\x1b[93mVangware\x1b[39m"
 * ```
 * @returns `input` string with **bright yellow** foreground.
 */
export const foregroundBrightYellow = foregroundColor(93);
