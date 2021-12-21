import { optionalFormat } from "./optionalFormat.js";

/**
 * Takes an `input` string and adds the ANSI codes for **dimmed** text.
 *
 * @category Text
 * @example
 * ```typescript
 * dimmed("Foo"); // "\x1b[2mFoo\x1b[22m"
 * dimmed("Bar"); // "\x1b[2mBar\x1b[22m"
 * ```
 * @returns `input` string with **dimmed** format.
 */
export const dimmed = optionalFormat(22)(2);
