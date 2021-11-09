import { FOREGROUND_BLACK } from "./codes";
import { foregroundColor } from "./foregroundColor";

/**
 * Takes an `input` string and adds the ANSI codes for **black** foreground.
 *
 * @category Foreground
 * @example
 * ```typescript
 * foregroundBlack("Foo"); // "\x1b[30mFoo\x1b[39m"
 * foregroundBlack("Bar"); // "\x1b[30mBar\x1b[39m"
 * ```
 * @returns `input` string with **black** foreground.
 */
export const foregroundBlack = foregroundColor(FOREGROUND_BLACK);
