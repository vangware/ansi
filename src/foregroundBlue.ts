import { FOREGROUND_BLUE } from "./codes";
import { foregroundColor } from "./foregroundColor";

/**
 * Takes an `input` string and adds the ANSI codes for **blue** foreground.
 *
 * @category Foreground
 * @example
 * ```typescript
 * foregroundBlue("Foo"); // "\x1b[34mFoo\x1b[39m"
 * foregroundBlue("Bar"); // "\x1b[34mBar\x1b[39m"
 * ```
 * @returns `input` string with **blue** foreground.
 */
export const foregroundBlue = foregroundColor(FOREGROUND_BLUE);
