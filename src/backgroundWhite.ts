import { backgroundColor } from "./backgroundColor";
import { BACKGROUND_WHITE } from "./codes";

/**
 * Takes a `source` string and adds the ANSI codes for **white** background.
 *
 * @category Background
 * @returns `source` string with **white** background.
 */
export const backgroundWhite = backgroundColor(BACKGROUND_WHITE);
