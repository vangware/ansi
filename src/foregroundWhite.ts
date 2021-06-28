import { FOREGROUND_WHITE } from "./codes";
import { foregroundColor } from "./foregroundColor";

/**
 * Takes an `input` string and adds the ANSI codes for **white** foreground.
 *
 * @category Foreground
 * @returns `input` string with **white** foreground.
 */
export const foregroundWhite = foregroundColor(FOREGROUND_WHITE);
