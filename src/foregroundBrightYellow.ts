import { foregroundColor } from "./foregroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **bright yellow**
 * foreground.
 *
 * @category Foreground
 * @example
 * ```typescript
 * foregroundBrightYellow("Foo"); // "\x1b[93mFoo\x1b[39m"
 * foregroundBrightYellow("Bar"); // "\x1b[93mBar\x1b[39m"
 * ```
 * @returns `input` string with **bright yellow** foreground.
 */
export const foregroundBrightYellow = foregroundColor(93);
