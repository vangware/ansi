import { backgroundColor } from "./backgroundColor";
import { BACKGROUND_BRIGHT_GREEN } from "./codes";

/**
 * Takes a `source` string and adds the ANSI codes for **bright green**
 * background.
 *
 * @category Background
 * @returns `source` string with **bright green** background.
 */
export const backgroundBrightGreen = backgroundColor(BACKGROUND_BRIGHT_GREEN);
