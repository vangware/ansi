import { FOREGROUND_BRIGHT_RED } from "./codes.js";
import { foregroundColor } from "./foregroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **bright red**
 * foreground.
 *
 * @category Foreground
 * @returns `input` string with **bright red** foreground.
 */
export const foregroundBrightRed = foregroundColor(FOREGROUND_BRIGHT_RED);
