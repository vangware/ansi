import { backgroundColor } from "./backgroundColor.js";
import { BACKGROUND_BRIGHT_CYAN } from "./codes.js";

/**
 * Takes an `input` string and adds the ANSI codes for **bright cyan**
 * background.
 *
 * @category Background
 * @returns `input` string with **bright cyan** background.
 */
export const backgroundBrightCyan = backgroundColor(BACKGROUND_BRIGHT_CYAN);
