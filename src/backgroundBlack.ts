import { backgroundColor } from "./backgroundColor.js";
import { BACKGROUND_BLACK } from "./codes.js";

/**
 * Takes an `input` string and adds the ANSI codes for **black** background.
 *
 * @category Background
 * @returns `input` string with **black** background.
 */
export const backgroundBlack = backgroundColor(BACKGROUND_BLACK);
