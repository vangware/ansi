import { NOT_UNDERLINE, UNDERLINE } from "./codes.js";
import { optionalFormat } from "./optionalFormat.js";

/**
 * Takes an `input` string and adds the ANSI codes for **underlined** text.
 *
 * @category Text
 * @returns `input` string with **underlined** format.
 */
export const underlined = optionalFormat(NOT_UNDERLINE)(UNDERLINE);
