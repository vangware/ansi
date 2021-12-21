import { foregroundColor } from "./foregroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **yellow** foreground.
 *
 * @category Foreground
 * @example
 * ```typescript
 * foregroundYellow("Foo"); // "\x1b[33mFoo\x1b[39m"
 * foregroundYellow("Bar"); // "\x1b[33mBar\x1b[39m"
 * ```
 * @returns `input` string with **yellow** foreground.
 */
export const foregroundYellow = foregroundColor(33);
