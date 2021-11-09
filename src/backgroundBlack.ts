import { backgroundColor } from "./backgroundColor";
import { BACKGROUND_BLACK } from "./codes";

/**
 * Takes an `input` string and adds the ANSI codes for **black** background.
 *
 * @category Background
 * @example
 * ```typescript
 * backgroundBlack("Foo"); // "\x1b[40mFoo\x1b[49m"
 * backgroundBlack("Bar"); // "\x1b[40mBar\x1b[49m"
 * ```
 * @returns `input` string with **black** background.
 */
export const backgroundBlack = backgroundColor(BACKGROUND_BLACK);
