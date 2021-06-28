import { FOREGROUND_GREEN } from "./codes";
import { foregroundColor } from "./foregroundColor";

/**
 * Takes an `input` string and adds the ANSI codes for **green** foreground.
 *
 * @category Foreground
 * @returns `input` string with **green** foreground.
 */
export const foregroundGreen = foregroundColor(FOREGROUND_GREEN);
