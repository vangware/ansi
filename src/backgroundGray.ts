import { backgroundColor } from "./backgroundColor";
import { BACKGROUND_GRAY } from "./codes";

/**
 * Takes an `input` string and adds the ANSI codes for **gray** background.
 *
 * @category Background
 * @returns `input` string with **gray** background.
 */
export const backgroundGray = backgroundColor(BACKGROUND_GRAY);
