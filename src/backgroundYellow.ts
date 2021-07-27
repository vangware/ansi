import { backgroundColor } from "./backgroundColor.js";
import { BACKGROUND_YELLOW } from "./codes.js";

/**
 * Takes an `input` string and adds the ANSI codes for **yellow** background.
 *
 * @category Background
 * @returns `input` string with **yellow** background.
 */
export const backgroundYellow = backgroundColor(BACKGROUND_YELLOW);
