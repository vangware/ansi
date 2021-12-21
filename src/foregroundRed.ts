import { foregroundColor } from "./foregroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **red** foreground.
 *
 * @category Foreground
 * @example
 * ```typescript
 * foregroundRed("Foo"); // "\x1b[31mFoo\x1b[39m"
 * foregroundRed("Bar"); // "\x1b[31mBar\x1b[39m"
 * ```
 * @returns `input` string with **red** foreground.
 */
export const foregroundRed = foregroundColor(31);
