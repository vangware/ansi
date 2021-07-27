import { backgroundColor } from "./backgroundColor.js";
import { BACKGROUND_CYAN } from "./codes.js";

/**
 * Takes an `input` string and adds the ANSI codes for **cyan** background.
 *
 * @category Background
 * @returns `input` string with **cyan** background.
 */
export const backgroundCyan = backgroundColor(BACKGROUND_CYAN);
