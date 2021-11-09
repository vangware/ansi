import { FOREGROUND_BRIGHT_WHITE } from "./codes";
import { foregroundColor } from "./foregroundColor";

/**
 * Takes an `input` string and adds the ANSI codes for **bright white**
 * foreground.
 *
 * @category Foreground
 * @example
 * ```typescript
 * foregroundBrightWhite("Foo"); // "\x1b[97mFoo\x1b[39m"
 * foregroundBrightWhite("Bar"); // "\x1b[97mBar\x1b[39m"
 * ```
 * @returns `input` string with **bright white** foreground.
 */
export const foregroundBrightWhite = foregroundColor(FOREGROUND_BRIGHT_WHITE);
