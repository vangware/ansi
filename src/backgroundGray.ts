import { backgroundColor } from "./backgroundColor";
import { BACKGROUND_GRAY } from "./codes";

/**
 * Takes an `input` string and adds the ANSI codes for **gray** background.
 *
 * @category Background
 * @example
 * ```typescript
 * backgroundGray("Foo"); // "\x1b[100mFoo\x1b[49m"
 * backgroundGray("Bar"); // "\x1b[100mBar\x1b[49m"
 * ```
 * @returns `input` string with **gray** background.
 */
export const backgroundGray = backgroundColor(BACKGROUND_GRAY);
