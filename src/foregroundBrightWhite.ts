import { foregroundColor } from "./foregroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **bright white**
 * foreground.
 *
 * @category Foreground
 * @example
 * ```typescript
 * foregroundBrightWhite("Vangware"); // "\x1b[97mVangware\x1b[39m"
 * // It can also be used as a tag function for tagged templates:
 * foregroundBrightWhite`Vangware`; // "\x1b[97mVangware\x1b[39m"
 * ```
 * @returns `input` string with **bright white** foreground.
 */
export const foregroundBrightWhite = foregroundColor(97);
