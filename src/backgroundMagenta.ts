import { backgroundColor } from "./backgroundColor";
import { BACKGROUND_MAGENTA } from "./codes";

/**
 * Takes an `input` string and adds the ANSI codes for **magenta** background.
 *
 * @category Background
 * @example
 * ```typescript
 * backgroundMagenta("Foo"); // "\x1b[45mFoo\x1b[49m"
 * backgroundMagenta("Bar"); // "\x1b[45mBar\x1b[49m"
 * ```
 * @returns `input` string with **magenta** background.
 */
export const backgroundMagenta = backgroundColor(BACKGROUND_MAGENTA);
