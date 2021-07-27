import { FOREGROUND_BRIGHT_WHITE } from "./codes.js";
import { foregroundColor } from "./foregroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **bright white**
 * foreground.
 *
 * @category Foreground
 * @returns `input` string with **bright white** foreground.
 */
export const foregroundBrightWhite = foregroundColor(FOREGROUND_BRIGHT_WHITE);
