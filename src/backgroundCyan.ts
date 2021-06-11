import { backgroundColor } from "./backgroundColor";
import { BACKGROUND_CYAN } from "./codes";

/**
 * Takes a `source` string and adds the ANSI codes for **cyan** background.
 *
 * @category Background
 * @returns `source` string with **cyan** background.
 */
export const backgroundCyan = backgroundColor(BACKGROUND_CYAN);
