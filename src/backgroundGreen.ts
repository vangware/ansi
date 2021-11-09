import { backgroundColor } from "./backgroundColor";
import { BACKGROUND_GREEN } from "./codes";

/**
 * Takes an `input` string and adds the ANSI codes for **green** background.
 *
 * @category Background
 * @example
 * ```typescript
 * backgroundGreen("Foo"); // "\x1b[42mFoo\x1b[49m"
 * backgroundGreen("Bar"); // "\x1b[42mBar\x1b[49m"
 * ```
 * @returns `input` string with **green** background.
 */
export const backgroundGreen = backgroundColor(BACKGROUND_GREEN);
