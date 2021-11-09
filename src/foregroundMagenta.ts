import { FOREGROUND_MAGENTA } from "./codes";
import { foregroundColor } from "./foregroundColor";

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
export const foregroundMagenta = foregroundColor(FOREGROUND_MAGENTA);
