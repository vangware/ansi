import { foregroundColor } from "./foregroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **white** foreground.
 *
 * @category Foreground
 * @example
 * ```typescript
 * foregroundWhite("Vangware"); // "\x1b[37mVangware\x1b[39m"
 * // It can also be used as a tag function for tagged templates:
 * foregroundWhite`Vangware`; // "\x1b[37mVangware\x1b[39m"
 * ```
 * @returns `input` string with **white** foreground.
 */
export const foregroundWhite = foregroundColor(37);
