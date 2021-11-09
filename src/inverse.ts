import { INVERT, NOT_INVERT } from "./codes";
import { optionalFormat } from "./optionalFormat";

/**
 * Takes an `input` string and adds the ANSI codes for **inverse** text.
 *
 * @category Text
 * @example
 * ```typescript
 * inverse("Foo"); // "\x1b[7mFoo\x1b[27m"
 * inverse("Bar"); // "\x1b[7mBar\x1b[27m"
 * ```
 * @returns `input` string with **inverse** format.
 */
export const inverse = optionalFormat(NOT_INVERT)(INVERT);
