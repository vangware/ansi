import { FOREGROUND_CYAN } from "./codes.js";
import { foregroundColor } from "./foregroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **cyan** foreground.
 *
 * @category Foreground
 * @returns `input` string with **cyan** foreground.
 */
export const foregroundCyan = foregroundColor(FOREGROUND_CYAN);
