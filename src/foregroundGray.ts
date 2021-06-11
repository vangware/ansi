import { FOREGROUND_GRAY } from "./codes";
import { foregroundColor } from "./foregroundColor";

/**
 * Takes a `source` string and adds the ANSI codes for **gray** foreground.
 *
 * @category Foreground
 * @returns `source` string with **gray** foreground.
 */
export const foregroundGray = foregroundColor(FOREGROUND_GRAY);
