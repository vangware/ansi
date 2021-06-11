import { FOREGROUND_MAGENTA } from "./codes";
import { foregroundColor } from "./foregroundColor";

/**
 * Takes a `source` string and adds the ANSI codes for **magenta** foreground.
 *
 * @category Foreground
 * @returns `source` string with **magenta** foreground.
 */
export const foregroundMagenta = foregroundColor(FOREGROUND_MAGENTA);
