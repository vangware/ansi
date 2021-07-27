import { BACKGROUND_DEFAULT } from "./codes.js";
import { optionalFormat } from "./optionalFormat.js";

/**
 * Takes an `open` ANSI code and an `input` string and adds the open and close
 * ANSI codes to that string (for background color).
 *
 * @category Background
 * @returns Curried function with `close` ANSI code for background in context.
 */
export const backgroundColor = optionalFormat(BACKGROUND_DEFAULT);
