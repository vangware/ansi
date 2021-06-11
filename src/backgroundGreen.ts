import { backgroundColor } from "./backgroundColor";
import { BACKGROUND_GREEN } from "./codes";

/**
 * Takes a `source` string and adds the ANSI codes for **green** background.
 *
 * @category Background
 * @returns `source` string with **green** background.
 */
export const backgroundGreen = backgroundColor(BACKGROUND_GREEN);
