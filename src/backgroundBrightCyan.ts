import { backgroundColor } from "./backgroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **bright cyan**
 * background.
 *
 * @category Background
 * @example
 * ```typescript
 * backgroundBrightCyan("Foo"); // "\x1b[106mFoo\x1b[49m"
 * backgroundBrightCyan("Bar"); // "\x1b[106mBar\x1b[49m"
 * ```
 * @returns `input` string with **bright cyan** background.
 */
export const backgroundBrightCyan = backgroundColor(106);
