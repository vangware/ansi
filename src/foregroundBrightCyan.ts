import { FOREGROUND_BRIGHT_CYAN } from "./codes.js";
import { foregroundColor } from "./foregroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **bright cyan**
 * foreground.
 *
 * @category Foreground
 * @returns `input` string with **bright cyan** foreground.
 */
export const foregroundBrightCyan = foregroundColor(FOREGROUND_BRIGHT_CYAN);
