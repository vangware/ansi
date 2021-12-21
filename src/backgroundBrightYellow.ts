import { backgroundColor } from "./backgroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **bright yellow**
 * background.
 *
 * @category Background
 * @example
 * ```typescript
 * backgroundBrightYellow("Foo"); // "\x1b[103mFoo\x1b[49m"
 * backgroundBrightYellow("Bar"); // "\x1b[103mBar\x1b[49m"
 * ```
 * @returns `input` string with **bright yellow** background.
 */
export const backgroundBrightYellow = backgroundColor(103);
