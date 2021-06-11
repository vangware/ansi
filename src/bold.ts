import { BOLD, REGULAR } from "./codes";
import { optionalFormat } from "./optionalFormat";

/**
 * Takes a `source` string and adds the ANSI codes for **bold** text.
 *
 * @category Text
 * @returns `source` string with **bold** format.
 */
export const bold = optionalFormat(REGULAR)(BOLD);
