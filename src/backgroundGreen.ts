import { backgroundColor } from "./backgroundColor.js";
import { BACKGROUND_GREEN } from "./codes.js";

/**
 * Takes an `input` string and adds the ANSI codes for **green** background.
 *
 * @category Background
 * @returns `input` string with **green** background.
 */
export const backgroundGreen = backgroundColor(BACKGROUND_GREEN);
