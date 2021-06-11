import { FOREGROUND_BLACK } from "./codes";
import { foregroundColor } from "./foregroundColor";

/**
 * Takes a `source` string and adds the ANSI codes for **black** foreground.
 *
 * @category Foreground
 * @returns `source` string with **black** foreground.
 */
export const foregroundBlack = foregroundColor(FOREGROUND_BLACK);
