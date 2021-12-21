import { foregroundColor } from "./foregroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **gray** foreground.
 *
 * @category Foreground
 * @example
 * ```typescript
 * foregroundGray("Foo"); // "\x1b[90mFoo\x1b[39m"
 * foregroundGray("Bar"); // "\x1b[90mBar\x1b[39m"
 * ```
 * @returns `input` string with **gray** foreground.
 */
export const foregroundGray = foregroundColor(90);
