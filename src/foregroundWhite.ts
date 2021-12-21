import { foregroundColor } from "./foregroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **white** foreground.
 *
 * @category Foreground
 * @example
 * ```typescript
 * foregroundWhite("Foo"); // "\x1b[37mFoo\x1b[39m"
 * foregroundWhite("Bar"); // "\x1b[37mBar\x1b[39m"
 * ```
 * @returns `input` string with **white** foreground.
 */
export const foregroundWhite = foregroundColor(37);
