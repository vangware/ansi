import { backgroundColor } from "./backgroundColor.js";
import { BACKGROUND_BRIGHT_YELLOW } from "./codes.js";

/**
 * Takes an `input` string and adds the ANSI codes for **bright yellow**
 * background.
 *
 * @category Background
 * @returns `input` string with **bright yellow** background.
 */
export const backgroundBrightYellow = backgroundColor(BACKGROUND_BRIGHT_YELLOW);
