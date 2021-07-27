import { backgroundColor } from "./backgroundColor.js";
import { BACKGROUND_BRIGHT_WHITE } from "./codes.js";

/**
 * Takes an `input` string and adds the ANSI codes for **bright white**
 * background.
 *
 * @category Background
 * @returns `input` string with **bright white** background.
 */
export const backgroundBrightWhite = backgroundColor(BACKGROUND_BRIGHT_WHITE);
