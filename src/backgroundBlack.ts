import { backgroundColor } from "./backgroundColor";
import { BACKGROUND_BLACK } from "./codes";

/**
 * Takes a `source` string and adds the ANSI codes for **black** background.
 *
 * @category Background
 * @returns `source` string with **black** background.
 */
export const backgroundBlack = backgroundColor(BACKGROUND_BLACK);
