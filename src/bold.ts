import { BOLD, REGULAR } from "./codes.js";
import { optionalFormat } from "./optionalFormat.js";

/**
 * Takes an `input` string and adds the ANSI codes for **bold** text.
 *
 * @category Text
 * @returns `input` string with **bold** format.
 */
export const bold = optionalFormat(REGULAR)(BOLD);
