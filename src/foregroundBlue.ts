import { FOREGROUND_BLUE } from "./codes";
import { foregroundColor } from "./foregroundColor";

/**
 * Takes an `input` string and adds the ANSI codes for **blue** foreground.
 *
 * @category Foreground
 * @returns `input` string with **blue** foreground.
 */
export const foregroundBlue = foregroundColor(FOREGROUND_BLUE);
