import { backgroundColor } from "./backgroundColor.js";
import { BACKGROUND_MAGENTA } from "./codes.js";

/**
 * Takes an `input` string and adds the ANSI codes for **magenta** background.
 *
 * @category Background
 * @returns `input` string with **magenta** background.
 */
export const backgroundMagenta = backgroundColor(BACKGROUND_MAGENTA);
