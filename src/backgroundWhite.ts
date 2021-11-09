import { backgroundColor } from "./backgroundColor";
import { BACKGROUND_WHITE } from "./codes";

/**
 * Takes an `input` string and adds the ANSI codes for **white** background.
 *
 * @category Background
 * @example
 * ```typescript
 * backgroundWhite("Foo"); // "\x1b[47mFoo\x1b[49m"
 * backgroundWhite("Bar"); // "\x1b[47mBar\x1b[49m"
 * ```
 * @returns `input` string with **white** background.
 */
export const backgroundWhite = backgroundColor(BACKGROUND_WHITE);
