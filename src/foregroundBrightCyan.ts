import { FOREGROUND_BRIGHT_CYAN } from "./codes";
import { foregroundColor } from "./foregroundColor";

/**
 * Takes a `source` string and adds the ANSI codes for **bright cyan**
 * foreground.
 *
 * @category Foreground
 * @returns `source` string with **bright cyan** foreground.
 */
export const foregroundBrightCyan = foregroundColor(FOREGROUND_BRIGHT_CYAN);
