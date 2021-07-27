import { NOT_STRIKE, STRIKE } from "./codes.js";
import { optionalFormat } from "./optionalFormat.js";

/**
 * Takes an `input` string and adds the ANSI codes for **strikethrough** text.
 *
 * @category Text
 * @returns `input` string with **strikethrough** format.
 */
export const strikethrough = optionalFormat(NOT_STRIKE)(STRIKE);
