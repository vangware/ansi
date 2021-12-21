import { foregroundColor } from "./foregroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **cyan** foreground.
 *
 * @category Foreground
 * @example
 * ```typescript
 * foregroundCyan("Foo"); // "\x1b[36mFoo\x1b[39m"
 * foregroundCyan("Bar"); // "\x1b[36mBar\x1b[39m"
 * ```
 * @returns `input` string with **cyan** foreground.
 */
export const foregroundCyan = foregroundColor(36);
