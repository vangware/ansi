import { FOREGROUND_MAGENTA } from "./codes";
import { foregroundColor } from "./foregroundColor";

/**
 * Takes an `input` string and adds the ANSI codes for **magenta** foreground.
 *
 * @category Foreground
 * @returns `input` string with **magenta** foreground.
 */
export const foregroundMagenta = foregroundColor(FOREGROUND_MAGENTA);
