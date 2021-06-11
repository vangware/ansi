import { FOREGROUND_RED } from "./codes";
import { foregroundColor } from "./foregroundColor";

/**
 * Takes a `source` string and adds the ANSI codes for **red** foreground.
 *
 * @category Foreground
 * @returns `source` string with **red** foreground.
 */
export const foregroundRed = foregroundColor(FOREGROUND_RED);
