import { FOREGROUND_WHITE } from "./codes";
import { foregroundColor } from "./foregroundColor";

/**
 * Takes a `source` string and adds the ANSI codes for **white** foreground.
 *
 * @category Foreground
 * @returns `source` string with **white** foreground.
 */
export const foregroundWhite = foregroundColor(FOREGROUND_WHITE);
