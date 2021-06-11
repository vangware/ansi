import { FOREGROUND_CYAN } from "./codes";
import { foregroundColor } from "./foregroundColor";

/**
 * Takes a `source` string and adds the ANSI codes for **cyan** foreground.
 *
 * @category Foreground
 * @returns `source` string with **cyan** foreground.
 */
export const foregroundCyan = foregroundColor(FOREGROUND_CYAN);
