import { foregroundColor } from "./foregroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **bright red**
 * foreground.
 *
 * @category Foreground
 * @example
 * ```typescript
 * foregroundBrightRed("Foo"); // "\x1b[91mFoo\x1b[39m"
 * foregroundBrightRed("Bar"); // "\x1b[91mBar\x1b[39m"
 * ```
 * @returns `input` string with **bright red** foreground.
 */
export const foregroundBrightRed = foregroundColor(91);
