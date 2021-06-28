import { ITALIC, NOT_ITALIC } from "./codes";
import { optionalFormat } from "./optionalFormat";

/**
 * Takes an `input` string and adds the ANSI codes for **italic** text.
 *
 * @category Text
 * @returns `input` string with **italic** format.
 */
export const italic = optionalFormat(NOT_ITALIC)(ITALIC);
