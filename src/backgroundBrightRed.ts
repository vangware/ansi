import { backgroundColor } from "./backgroundColor.js";
import { BACKGROUND_BRIGHT_RED } from "./codes.js";

/**
 * Takes an `input` string and adds the ANSI codes for **bright red**
 * background.
 *
 * @category Background
 * @returns `input` string with **bright red** background.
 */
export const backgroundBrightRed = backgroundColor(BACKGROUND_BRIGHT_RED);
