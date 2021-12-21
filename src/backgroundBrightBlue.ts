import { backgroundColor } from "./backgroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **bright blue**
 * background.
 *
 * @category Background
 * @example
 * ```typescript
 * backgroundBrightBlue("Foo"); // "\x1b[104mFoo\x1b[49m"
 * backgroundBrightBlue("Bar"); // "\x1b[104mBar\x1b[49m"
 * ```
 * @returns `input` string with **bright blue** background.
 */
export const backgroundBrightBlue = backgroundColor(104);
