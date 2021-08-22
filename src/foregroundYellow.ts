import { FOREGROUND_YELLOW } from "./codes";
import { foregroundColor } from "./foregroundColor";

/**
 * Takes an `input` string and adds the ANSI codes for **yellow** foreground.
 *
 * @category Foreground
 * @returns `input` string with **yellow** foreground.
 */
export const foregroundYellow = foregroundColor(FOREGROUND_YELLOW);
