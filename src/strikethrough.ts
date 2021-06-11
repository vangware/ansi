import { NOT_STRIKE, STRIKE } from "./codes";
import { optionalFormat } from "./optionalFormat";

/**
 * Takes a `source` string and adds the ANSI codes for **strikethrough** text.
 *
 * @category Text
 * @returns `source` string with **strikethrough** format.
 */
export const strikethrough = optionalFormat(NOT_STRIKE)(STRIKE);
