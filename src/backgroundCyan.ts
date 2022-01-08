import { backgroundColor } from "./backgroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **cyan** background.
 *
 * @category Background
 * @example
 * ```typescript
 * backgroundCyan("Vangware"); // "\x1b[46mVangware\x1b[49m"
 * // It can also be used as a tag function for tagged templates:
 * backgroundCyan`Vangware`; // "\x1b[46mVangware\x1b[49m"
 * ```
 * @returns `input` string with **cyan** background.
 */
export const backgroundCyan = backgroundColor(46);
