import { BACKGROUND_DEFAULT } from "./codes";
import { optionalFormat } from "./optionalFormat";

/**
 * Takes an `open` ANSI code and an `input` string and adds the open and close
 * ANSI codes to that string (for background color).
 *
 * @category Background
 * @example
 * ```typescript
 * backgroundColor(13)("Foo"); // "\x1b[13mFoo\x1b[49m"
 * backgroundColor(42)("Bar"); // "\x1b[42mBar\x1b[49m"
 * ```
 * @returns Curried function with `close` ANSI code for background in context.
 */
export const backgroundColor = optionalFormat(BACKGROUND_DEFAULT);
