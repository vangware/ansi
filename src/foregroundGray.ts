import { FOREGROUND_GRAY } from "./codes";
import { foregroundColor } from "./foregroundColor";

/**
 * Takes an `input` string and adds the ANSI codes for **gray** foreground.
 *
 * @category Foreground
 * @returns `input` string with **gray** foreground.
 */
export const foregroundGray = foregroundColor(FOREGROUND_GRAY);
