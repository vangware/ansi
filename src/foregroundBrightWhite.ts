import { FOREGROUND_BRIGHT_WHITE } from "./codes";
import { foregroundColor } from "./foregroundColor";

/**
 * Takes an `input` string and adds the ANSI codes for **bright white**
 * foreground.
 *
 * @category Foreground
 * @returns `input` string with **bright white** foreground.
 */
export const foregroundBrightWhite = foregroundColor(FOREGROUND_BRIGHT_WHITE);
