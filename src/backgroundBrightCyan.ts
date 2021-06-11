import { backgroundColor } from "./backgroundColor";
import { BACKGROUND_BRIGHT_CYAN } from "./codes";

/**
 * Takes a `source` string and adds the ANSI codes for **bright cyan**
 * background.
 *
 * @category Background
 * @returns `source` string with **bright cyan** background.
 */
export const backgroundBrightCyan = backgroundColor(BACKGROUND_BRIGHT_CYAN);
