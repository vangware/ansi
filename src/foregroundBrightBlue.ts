import { FOREGROUND_BRIGHT_BLUE } from "./codes";
import { foregroundColor } from "./foregroundColor";

/**
 * Takes a `source` string and adds the ANSI codes for **bright blue**
 * foreground.
 *
 * @category Foreground
 * @returns `source` string with **bright blue** foreground.
 */
export const foregroundBrightBlue = foregroundColor(FOREGROUND_BRIGHT_BLUE);
