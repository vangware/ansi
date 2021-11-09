import { FOREGROUND_BRIGHT_GREEN } from "./codes";
import { foregroundColor } from "./foregroundColor";

/**
 * Takes an `input` string and adds the ANSI codes for **bright green**
 * foreground.
 *
 * @category Foreground
 * @example
 * ```typescript
 * foregroundBrightGreen("Foo"); // "\x1b[92mFoo\x1b[39m"
 * foregroundBrightGreen("Bar"); // "\x1b[92mBar\x1b[39m"
 * ```
 * @returns `input` string with **bright green** foreground.
 */
export const foregroundBrightGreen = foregroundColor(FOREGROUND_BRIGHT_GREEN);
