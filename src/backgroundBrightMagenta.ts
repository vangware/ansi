import { backgroundColor } from "./backgroundColor.js";
import { BACKGROUND_BRIGHT_MAGENTA } from "./codes.js";

/**
 * Takes an `input` string and adds the ANSI codes for **bright magenta**
 * background.
 *
 * @category Background
 * @returns `input` string with **bright magenta** background.
 */
export const backgroundBrightMagenta = backgroundColor(
	BACKGROUND_BRIGHT_MAGENTA
);
