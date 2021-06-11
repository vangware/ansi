import { FOREGROUND_GREEN } from "./codes";
import { foregroundColor } from "./foregroundColor";

/**
 * Takes a `source` string and adds the ANSI codes for **green** foreground.
 *
 * @category Foreground
 * @returns `source` string with **green** foreground.
 */
export const foregroundGreen = foregroundColor(FOREGROUND_GREEN);
