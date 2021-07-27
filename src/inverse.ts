import { INVERT, NOT_INVERT } from "./codes.js";
import { optionalFormat } from "./optionalFormat.js";

/**
 * Takes an `input` string and adds the ANSI codes for **inverse** text.
 *
 * @category Text
 * @returns `input` string with **inverse** format.
 */
export const inverse = optionalFormat(NOT_INVERT)(INVERT);
