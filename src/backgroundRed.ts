import { backgroundColor } from "./backgroundColor.js";
import { BACKGROUND_RED } from "./codes.js";

/**
 * Takes an `input` string and adds the ANSI codes for **red** background.
 *
 * @category Background
 * @returns `input` string with **red** background.
 */
export const backgroundRed = backgroundColor(BACKGROUND_RED);
