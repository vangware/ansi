import { FOREGROUND_RED } from "./codes.js";
import { foregroundColor } from "./foregroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **red** foreground.
 *
 * @category Foreground
 * @returns `input` string with **red** foreground.
 */
export const foregroundRed = foregroundColor(FOREGROUND_RED);
