import { FOREGROUND_YELLOW } from "./codes";
import { foregroundColor } from "./foregroundColor";

/**
 * Takes a `source` string and adds the ANSI codes for **yellow** foreground.
 *
 * @category Foreground
 * @returns `source` string with **yellow** foreground.
 */
export const foregroundYellow = foregroundColor(FOREGROUND_YELLOW);
