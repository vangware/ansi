import { optionalFormat } from "./optionalFormat.js";

/**
 * Takes an `input` string and adds the ANSI codes for **underlined** text.
 *
 * @category Text
 * @example
 * ```typescript
 * underlined("Foo"); // "\x1b[4mFoo\x1b[24m"
 * underlined("Bar"); // "\x1b[4mBar\x1b[24m"
 * ```
 * @returns `input` string with **underlined** format.
 */
export const underlined = optionalFormat(24)(4);
