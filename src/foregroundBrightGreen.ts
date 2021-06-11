import { FOREGROUND_BRIGHT_GREEN } from "./codes";
import { foregroundColor } from "./foregroundColor";

/**
 * Takes a `source` string and adds the ANSI codes for **bright green**
 * foreground.
 *
 * @category Foreground
 * @returns `source` string with **bright green** foreground.
 */
export const foregroundBrightGreen = foregroundColor(FOREGROUND_BRIGHT_GREEN);
