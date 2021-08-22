import { FOREGROUND_BLACK } from "./codes";
import { foregroundColor } from "./foregroundColor";

/**
 * Takes an `input` string and adds the ANSI codes for **black** foreground.
 *
 * @category Foreground
 * @returns `input` string with **black** foreground.
 */
export const foregroundBlack = foregroundColor(FOREGROUND_BLACK);
