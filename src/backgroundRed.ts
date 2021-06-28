import { backgroundColor } from "./backgroundColor";
import { BACKGROUND_RED } from "./codes";

/**
 * Takes an `input` string and adds the ANSI codes for **red** background.
 *
 * @category Background
 * @returns `input` string with **red** background.
 */
export const backgroundRed = backgroundColor(BACKGROUND_RED);
