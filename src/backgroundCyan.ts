import { backgroundColor } from "./backgroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **cyan** background.
 *
 * @category Background
 * @example
 * ```typescript
 * backgroundCyan("Foo"); // "\x1b[46mFoo\x1b[49m"
 * backgroundCyan("Bar"); // "\x1b[46mBar\x1b[49m"
 * ```
 * @returns `input` string with **cyan** background.
 */
export const backgroundCyan = backgroundColor(46);
