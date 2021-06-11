import { NOT_UNDERLINE, UNDERLINE } from "./codes";
import { optionalFormat } from "./optionalFormat";

/**
 * Takes a `source` string and adds the ANSI codes for **underlined** text.
 *
 * @category Text
 * @returns `source` string with **underlined** format.
 */
export const underlined = optionalFormat(NOT_UNDERLINE)(UNDERLINE);
