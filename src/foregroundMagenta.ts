import { foregroundColor } from "./foregroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **magenta** foreground.
 *
 * @category Foreground
 * @example
 * ```typescript
 * foregroundMagenta("Foo"); // "\x1b[35mFoo\x1b[39m"
 * foregroundMagenta("Bar"); // "\x1b[35mBar\x1b[39m"
 * ```
 * @returns `input` string with **magenta** foreground.
 */
export const foregroundMagenta = foregroundColor(35);
