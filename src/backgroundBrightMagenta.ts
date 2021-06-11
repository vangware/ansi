import { backgroundColor } from "./backgroundColor";
import { BACKGROUND_BRIGHT_MAGENTA } from "./codes";

/**
 * Takes a `source` string and adds the ANSI codes for **bright magenta**
 * background.
 *
 * @category Background
 * @returns `source` string with **bright magenta** background.
 */
export const backgroundBrightMagenta = backgroundColor(
	BACKGROUND_BRIGHT_MAGENTA
);
