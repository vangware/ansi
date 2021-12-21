import { backgroundColor } from "./backgroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **bright magenta**
 * background.
 *
 * @category Background
 * @example
 * ```typescript
 * backgroundBrightMagenta("Foo"); // "\x1b[105mFoo\x1b[49m"
 * backgroundBrightMagenta("Bar"); // "\x1b[105mBar\x1b[49m"
 * ```
 * @returns `input` string with **bright magenta** background.
 */
export const backgroundBrightMagenta = backgroundColor(105);
