import { FOREGROUND_YELLOW } from "./codes.js";
import { foregroundColor } from "./foregroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **yellow** foreground.
 *
 * @category Foreground
 * @returns `input` string with **yellow** foreground.
 */
export const foregroundYellow = foregroundColor(FOREGROUND_YELLOW);
