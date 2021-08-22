import { DIM, REGULAR } from "./codes";
import { optionalFormat } from "./optionalFormat";

/**
 * Takes an `input` string and adds the ANSI codes for **dimmed** text.
 *
 * @category Text
 * @returns `input` string with **dimmed** format.
 */
export const dimmed = optionalFormat(REGULAR)(DIM);
