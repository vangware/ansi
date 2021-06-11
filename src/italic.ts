import { ITALIC, NOT_ITALIC } from "./codes";
import { optionalFormat } from "./optionalFormat";

/**
 * Takes a `source` string and adds the ANSI codes for **italic** text.
 *
 * @category Text
 * @returns `source` string with **italic** format.
 */
export const italic = optionalFormat(NOT_ITALIC)(ITALIC);
