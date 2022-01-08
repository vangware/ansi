import { backgroundColor } from "./backgroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **magenta** background.
 *
 * @category Background
 * @example
 * ```typescript
 * backgroundMagenta("Vangware"); // "\x1b[45mVangware\x1b[49m"
 * // It can also be used as a tag function for tagged templates:
 * backgroundMagenta`Vangware`; // "\x1b[45mVangware\x1b[49m"
 * ```
 * @returns `input` string with **magenta** background.
 */
export const backgroundMagenta = backgroundColor(45);
