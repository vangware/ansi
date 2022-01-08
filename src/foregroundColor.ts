import { optionalFormat } from "./optionalFormat.js";

/**
 * Takes an `open` ANSI code and an `input` string and adds the open and close
 * ANSI codes to that string (for text color).
 *
 * @category Foreground
 * @example
 * ```typescript
 * foregroundColor(13)("Vangware"); // "\x1b[13mVangware\x1b[39m"
 * // It can also be used as a tag function for tagged templates:
 * foregroundColor(13)`Vangware`; // "\x1b[13mVangware\x1b[39m"
 * ```
 * @returns Curried function with `close` ANSI code for text color in context.
 */
export const foregroundColor = optionalFormat(39);
