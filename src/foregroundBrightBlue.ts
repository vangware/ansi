import { foregroundColor } from "./foregroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **bright blue**
 * foreground.
 *
 * @category Foreground
 * @example
 * ```typescript
 * foregroundBrightBlue("Foo"); // "\x1b[94mFoo\x1b[39m"
 * foregroundBrightBlue("Bar"); // "\x1b[94mBar\x1b[39m"
 * ```
 * @returns `input` string with **bright blue** foreground.
 */
export const foregroundBrightBlue = foregroundColor(94);
