import { FOREGROUND_BRIGHT_BLUE } from "./codes.js";
import { foregroundColor } from "./foregroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **bright blue**
 * foreground.
 *
 * @category Foreground
 * @returns `input` string with **bright blue** foreground.
 */
export const foregroundBrightBlue = foregroundColor(FOREGROUND_BRIGHT_BLUE);
