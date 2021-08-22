import { backgroundColor } from "./backgroundColor";
import { BACKGROUND_BRIGHT_WHITE } from "./codes";

/**
 * Takes an `input` string and adds the ANSI codes for **bright white**
 * background.
 *
 * @category Background
 * @returns `input` string with **bright white** background.
 */
export const backgroundBrightWhite = backgroundColor(BACKGROUND_BRIGHT_WHITE);
