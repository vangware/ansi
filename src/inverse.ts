import { INVERT, NOT_INVERT } from "./codes";
import { optionalFormat } from "./optionalFormat";

/**
 * Takes a `source` string and adds the ANSI codes for **inverse** text.
 *
 * @category Text
 * @returns `source` string with **inverse** format.
 */
export const inverse = optionalFormat(NOT_INVERT)(INVERT);
