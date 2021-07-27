import { backgroundColor } from "./backgroundColor.js";
import { BACKGROUND_WHITE } from "./codes.js";

/**
 * Takes an `input` string and adds the ANSI codes for **white** background.
 *
 * @category Background
 * @returns `input` string with **white** background.
 */
export const backgroundWhite = backgroundColor(BACKGROUND_WHITE);
