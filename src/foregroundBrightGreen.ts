import { FOREGROUND_BRIGHT_GREEN } from "./codes.js";
import { foregroundColor } from "./foregroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **bright green**
 * foreground.
 *
 * @category Foreground
 * @returns `input` string with **bright green** foreground.
 */
export const foregroundBrightGreen = foregroundColor(FOREGROUND_BRIGHT_GREEN);
