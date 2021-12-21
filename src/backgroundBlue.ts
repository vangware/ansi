import { backgroundColor } from "./backgroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **blue** background.
 *
 * @category Background
 * @example
 * ```typescript
 * backgroundBlue("Foo"); // "\x1b[44mFoo\x1b[49m"
 * backgroundBlue("Bar"); // "\x1b[44mBar\x1b[49m"
 * ```
 * @returns `input` string with **blue** background.
 */
export const backgroundBlue = backgroundColor(44);
