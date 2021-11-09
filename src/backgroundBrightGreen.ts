import { backgroundColor } from "./backgroundColor";
import { BACKGROUND_BRIGHT_GREEN } from "./codes";

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
export const backgroundBrightGreen = backgroundColor(BACKGROUND_BRIGHT_GREEN);
