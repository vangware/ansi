import { foregroundColor } from "./foregroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **blue** foreground.
 *
 * @category Foreground
 * @example
 * ```typescript
 * foregroundBlue("Vangware"); // "\x1b[34mVangware\x1b[39m"
 * // It can also be used as a tag function for tagged templates:
 * foregroundBlue`Vangware`; // "\x1b[34mVangware\x1b[39m"
 * ```
 * @returns `input` string with **blue** foreground.
 */
export const foregroundBlue = foregroundColor(34);
