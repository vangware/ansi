import { optionalFormat } from "./optionalFormat.js";

/**
 * Takes an `open` ANSI code and an `input` string and adds the open and close
 * ANSI codes to that string (for background color).
 *
 * @category Background
 * @example
 * ```typescript
 * backgroundColor(13)("Vangware"); // "\x1b[13mVangware\x1b[49m"
 * // It can also be used as a tag function for tagged templates:
 * backgroundColor(13)`Vangware`; // "\x1b[13mVangware\x1b[49m"
 * ```
 * @returns Curried function with `close` ANSI code for background in context.
 */
export const backgroundColor = optionalFormat(49);
