import { backgroundColor } from "./backgroundColor.js";
import { BACKGROUND_BRIGHT_BLUE } from "./codes.js";

/**
 * Takes an `input` string and adds the ANSI codes for **bright blue**
 * background.
 *
 * @category Background
 * @returns `input` string with **bright blue** background.
 */
export const backgroundBrightBlue = backgroundColor(BACKGROUND_BRIGHT_BLUE);
