import { backgroundColor } from "./backgroundColor";
import { BACKGROUND_GRAY } from "./codes";

/**
 * Takes a `source` string and adds the ANSI codes for **gray** background.
 *
 * @category Background
 * @returns `source` string with **gray** background.
 */
export const backgroundGray = backgroundColor(BACKGROUND_GRAY);
