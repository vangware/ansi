import { NOT_STRIKE, STRIKE } from "./codes";
import { optionalFormat } from "./optionalFormat";

/**
 * Takes an `input` string and adds the ANSI codes for **strikethrough** text.
 *
 * @category Text
 * @example
 * ```typescript
 * strikethrough("Foo"); // "\x1b[9mFoo\x1b[29m"
 * strikethrough("Bar"); // "\x1b[9mBar\x1b[29m"
 * ```
 * @returns `input` string with **strikethrough** format.
 */
export const strikethrough = optionalFormat(NOT_STRIKE)(STRIKE);
