import { FOREGROUND_BRIGHT_YELLOW } from "./codes";
import { foregroundColor } from "./foregroundColor";

/**
 * Takes an `input` string and adds the ANSI codes for **bright yellow**
 * foreground.
 *
 * @category Foreground
 * @returns `input` string with **bright yellow** foreground.
 */
export const foregroundBrightYellow = foregroundColor(FOREGROUND_BRIGHT_YELLOW);
