import { backgroundColor } from "./backgroundColor";
import { BACKGROUND_BLUE } from "./codes";

/**
 * Takes a `source` string and adds the ANSI codes for **blue** background.
 *
 * @category Background
 * @returns `source` string with **blue** background.
 */
export const backgroundBlue = backgroundColor(BACKGROUND_BLUE);
