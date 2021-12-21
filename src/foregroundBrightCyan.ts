import { foregroundColor } from "./foregroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **bright cyan**
 * foreground.
 *
 * @category Foreground
 * @example
 * ```typescript
 * foregroundBrightCyan("Foo"); // "\x1b[96mFoo\x1b[39m"
 * foregroundBrightCyan("Bar"); // "\x1b[96mBar\x1b[39m"
 * ```
 * @returns `input` string with **bright cyan** foreground.
 */
export const foregroundBrightCyan = foregroundColor(96);
