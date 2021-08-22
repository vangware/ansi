import { INVERT, NOT_INVERT } from "./codes";
import { optionalFormat } from "./optionalFormat";

/**
 * Takes an `input` string and adds the ANSI codes for **inverse** text.
 *
 * @category Text
 * @returns `input` string with **inverse** format.
 */
export const inverse = optionalFormat(NOT_INVERT)(INVERT);
