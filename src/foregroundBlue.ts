import { FOREGROUND_BLUE } from "./codes.js";
import { foregroundColor } from "./foregroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **blue** foreground.
 *
 * @category Foreground
 * @returns `input` string with **blue** foreground.
 */
export const foregroundBlue = foregroundColor(FOREGROUND_BLUE);
