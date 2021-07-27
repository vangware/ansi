import { FOREGROUND_GREEN } from "./codes.js";
import { foregroundColor } from "./foregroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **green** foreground.
 *
 * @category Foreground
 * @returns `input` string with **green** foreground.
 */
export const foregroundGreen = foregroundColor(FOREGROUND_GREEN);
