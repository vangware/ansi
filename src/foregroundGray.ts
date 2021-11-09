import { FOREGROUND_GRAY } from "./codes";
import { foregroundColor } from "./foregroundColor";

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
export const foregroundGray = foregroundColor(FOREGROUND_GRAY);
