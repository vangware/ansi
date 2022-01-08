import { foregroundColor } from "./foregroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **yellow** foreground.
 *
 * @category Foreground
 * @example
 * ```typescript
 * foregroundYellow("Vangware"); // "\x1b[33mVangware\x1b[39m"
 * // It can also be used as a tag function for tagged templates:
 * foregroundYellow`Vangware`; // "\x1b[33mVangware\x1b[39m"
 * ```
 * @returns `input` string with **yellow** foreground.
 */
export const foregroundYellow = foregroundColor(33);
