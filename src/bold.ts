import { BOLD, REGULAR } from "./codes";
import { optionalFormat } from "./optionalFormat";

/**
 * Takes an `input` string and adds the ANSI codes for **bold** text.
 *
 * @category Text
 * @returns `input` string with **bold** format.
 */
export const bold = optionalFormat(REGULAR)(BOLD);
