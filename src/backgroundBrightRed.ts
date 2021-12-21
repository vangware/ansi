import { backgroundColor } from "./backgroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **bright red**
 * background.
 *
 * @category Background
 * @example
 * ```typescript
 * backgroundBrightRed("Foo"); // "\x1b[101mFoo\x1b[49m"
 * backgroundBrightRed("Bar"); // "\x1b[101mBar\x1b[49m"
 * ```
 * @returns `input` string with **bright red** background.
 */
export const backgroundBrightRed = backgroundColor(101);
