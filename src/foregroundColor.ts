import { FOREGROUND_DEFAULT } from "./codes";
import { optionalFormat } from "./optionalFormat";

/**
 * Takes an `open` ANSI code and an `input` string and adds the open and close
 * ANSI codes to that string (for text color).
 *
 * @category Foreground
 * @example
 * ```typescript
 * foregroundColor(13)("Foo"); // "\x1b[13mFoo\x1b[39m"
 * foregroundColor(42)("Bar"); // "\x1b[42mBar\x1b[39m"
 * ```
 * @returns Curried function with `close` ANSI code for text color in context.
 */
export const foregroundColor = optionalFormat(FOREGROUND_DEFAULT);
