import { foregroundColor } from "./foregroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **green** foreground.
 *
 * @category Foreground
 * @example
 * ```typescript
 * foregroundGreen("Foo"); // "\x1b[32mFoo\x1b[39m"
 * foregroundGreen("Bar"); // "\x1b[32mBar\x1b[39m"
 * ```
 * @returns `input` string with **green** foreground.
 */
export const foregroundGreen = foregroundColor(32);
