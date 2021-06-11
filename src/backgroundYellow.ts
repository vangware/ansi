import { backgroundColor } from "./backgroundColor";
import { BACKGROUND_YELLOW } from "./codes";

/**
 * Takes a `source` string and adds the ANSI codes for **yellow** background.
 *
 * @category Background
 * @returns `source` string with **yellow** background.
 */
export const backgroundYellow = backgroundColor(BACKGROUND_YELLOW);
