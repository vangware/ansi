import { backgroundColor } from "./backgroundColor.js";
import { BACKGROUND_BLUE } from "./codes.js";

/**
 * Takes an `input` string and adds the ANSI codes for **blue** background.
 *
 * @category Background
 * @returns `input` string with **blue** background.
 */
export const backgroundBlue = backgroundColor(BACKGROUND_BLUE);
