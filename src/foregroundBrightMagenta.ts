import { foregroundColor } from "./foregroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **bright magenta**
 * foreground.
 *
 * @category Foreground
 * @example
 * ```typescript
 * foregroundBrightMagenta("Foo"); // "\x1b[95mFoo\x1b[39m"
 * foregroundBrightMagenta("Bar"); // "\x1b[95mBar\x1b[39m"
 * ```
 * @returns `input` string with **bright magenta** foreground.
 */
export const foregroundBrightMagenta = foregroundColor(95);
