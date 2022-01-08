import { foregroundColor } from "./foregroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **cyan** foreground.
 *
 * @category Foreground
 * @example
 * ```typescript
 * foregroundCyan("Vangware"); // "\x1b[36mVangware\x1b[39m"
 * // It can also be used as a tag function for tagged templates:
 * foregroundCyan`Vangware`; // "\x1b[36mVangware\x1b[39m"
 * ```
 * @returns `input` string with **cyan** foreground.
 */
export const foregroundCyan = foregroundColor(36);
