import { backgroundColor } from "./backgroundColor";
import { BACKGROUND_RED } from "./codes";

/**
 * Takes an `input` string and adds the ANSI codes for **red** background.
 *
 * @category Background
 * @example
 * ```typescript
 * backgroundRed("Foo"); // "\x1b[41mFoo\x1b[49m"
 * backgroundRed("Bar"); // "\x1b[41mBar\x1b[49m"
 * ```
 * @returns `input` string with **red** background.
 */
export const backgroundRed = backgroundColor(BACKGROUND_RED);
