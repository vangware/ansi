import { backgroundColor } from "./backgroundColor";
import { BACKGROUND_MAGENTA } from "./codes";

/**
 * Takes a `source` string and adds the ANSI codes for **magenta** background.
 *
 * @category Background
 * @returns `source` string with **magenta** background.
 */
export const backgroundMagenta = backgroundColor(BACKGROUND_MAGENTA);
