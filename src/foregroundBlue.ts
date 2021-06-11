import { FOREGROUND_BLUE } from "./codes";
import { foregroundColor } from "./foregroundColor";

/**
 * Takes a `source` string and adds the ANSI codes for **blue** foreground.
 *
 * @category Foreground
 * @returns `source` string with **blue** foreground.
 */
export const foregroundBlue = foregroundColor(FOREGROUND_BLUE);
