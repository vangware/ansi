import { FOREGROUND_WHITE } from "./codes.js";
import { foregroundColor } from "./foregroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **white** foreground.
 *
 * @category Foreground
 * @returns `input` string with **white** foreground.
 */
export const foregroundWhite = foregroundColor(FOREGROUND_WHITE);
