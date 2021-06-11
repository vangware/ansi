import { DIM, REGULAR } from "./codes";
import { optionalFormat } from "./optionalFormat";

/**
 * Takes a `source` string and adds the ANSI codes for **dimmed** text.
 *
 * @category Text
 * @returns `source` string with **dimmed** format.
 */
export const dimmed = optionalFormat(REGULAR)(DIM);
