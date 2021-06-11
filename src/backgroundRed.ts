import { backgroundColor } from "./backgroundColor";
import { BACKGROUND_RED } from "./codes";

/**
 * Takes a `source` string and adds the ANSI codes for **red** background.
 *
 * @category Background
 * @returns `source` string with **red** background.
 */
export const backgroundRed = backgroundColor(BACKGROUND_RED);
