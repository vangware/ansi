import { backgroundColor } from "./backgroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **bright green**
 * background.
 *
 * @category Background
 * @example
 * ```typescript
 * backgroundBrightGreen("Foo"); // "\x1b[102mFoo\x1b[49m"
 * backgroundBrightGreen("Bar"); // "\x1b[102mBar\x1b[49m"
 * ```
 * @returns `input` string with **bright green** background.
 */
export const backgroundBrightGreen = backgroundColor(102);
