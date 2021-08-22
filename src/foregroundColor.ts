import { FOREGROUND_DEFAULT } from "./codes";
import { optionalFormat } from "./optionalFormat";

/**
 * Takes an `open` ANSI code and an `input` string and adds the open and close
 * ANSI codes to that string (for text color).
 *
 * @category Foreground
 * @returns Curried function with `close` ANSI code for text color in context.
 */
export const foregroundColor = optionalFormat(FOREGROUND_DEFAULT);
