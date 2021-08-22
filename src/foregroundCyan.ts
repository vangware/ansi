import { FOREGROUND_CYAN } from "./codes";
import { foregroundColor } from "./foregroundColor";

/**
 * Takes an `input` string and adds the ANSI codes for **cyan** foreground.
 *
 * @category Foreground
 * @returns `input` string with **cyan** foreground.
 */
export const foregroundCyan = foregroundColor(FOREGROUND_CYAN);
