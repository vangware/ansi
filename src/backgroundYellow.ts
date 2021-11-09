import { backgroundColor } from "./backgroundColor";
import { BACKGROUND_YELLOW } from "./codes";

/**
 * Takes an `input` string and adds the ANSI codes for **yellow** background.
 *
 * @category Background
 * @example
 * ```typescript
 * backgroundYellow("Foo"); // "\x1b[43mFoo\x1b[49m"
 * backgroundYellow("Bar"); // "\x1b[43mBar\x1b[49m"
 * ```
 * @returns `input` string with **yellow** background.
 */
export const backgroundYellow = backgroundColor(BACKGROUND_YELLOW);
