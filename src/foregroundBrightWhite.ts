import { FOREGROUND_BRIGHT_WHITE } from "./codes";
import { foregroundColor } from "./foregroundColor";

/**
 * Takes a `source` string and adds the ANSI codes for **bright white**
 * foreground.
 *
 * @category Foreground
 * @returns `source` string with **bright white** foreground.
 */
export const foregroundBrightWhite = foregroundColor(FOREGROUND_BRIGHT_WHITE);
