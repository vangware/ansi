import { foregroundColor } from "./foregroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **gray** foreground.
 *
 * @category Foreground
 * @example
 * ```typescript
 * foregroundGray("Vangware"); // "\x1b[90mVangware\x1b[39m"
 * // It can also be used as a tag function for tagged templates:
 * foregroundGray`Vangware`; // "\x1b[90mVangware\x1b[39m"
 * ```
 * @returns `input` string with **gray** foreground.
 */
export const foregroundGray = foregroundColor(90);
