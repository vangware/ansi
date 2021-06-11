import { FOREGROUND_BRIGHT_MAGENTA } from "./codes";
import { foregroundColor } from "./foregroundColor";

/**
 * Takes a `source` string and adds the ANSI codes for **bright magenta**
 * foreground.
 *
 * @category Foreground
 * @returns `source` string with **bright magenta** foreground.
 */
export const foregroundBrightMagenta = foregroundColor(
	FOREGROUND_BRIGHT_MAGENTA
);
