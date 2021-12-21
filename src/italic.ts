import { optionalFormat } from "./optionalFormat.js";

/**
 * Takes an `input` string and adds the ANSI codes for **italic** text.
 *
 * @category Text
 * @example
 * ```typescript
 * italic("Foo"); // "\x1b[3mFoo\x1b[23m"
 * italic("Bar"); // "\x1b[3mBar\x1b[23m"
 * ```
 * @returns `input` string with **italic** format.
 */
export const italic = optionalFormat(23)(3);
