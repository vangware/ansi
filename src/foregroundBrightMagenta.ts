import { FOREGROUND_BRIGHT_MAGENTA } from "./codes.js";
import { foregroundColor } from "./foregroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **bright magenta**
 * foreground.
 *
 * @category Foreground
 * @returns `input` string with **bright magenta** foreground.
 */
export const foregroundBrightMagenta = foregroundColor(
	FOREGROUND_BRIGHT_MAGENTA
);
