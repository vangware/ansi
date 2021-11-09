import { BOLD, REGULAR } from "./codes";
import { optionalFormat } from "./optionalFormat";

/**
 * Takes an `input` string and adds the ANSI codes for **bold** text.
 *
 * @category Text
 * @example
 * ```typescript
 * bold("Foo"); // "\x1b[1mFoo\x1b[22m"
 * bold("Bar"); // "\x1b[1mBar\x1b[22m"
 * ```
 * @returns `input` string with **bold** format.
 */
export const bold = optionalFormat(REGULAR)(BOLD);
