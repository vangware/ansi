import { backgroundColor } from "./backgroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **red** background.
 *
 * @category Background
 * @example
 * ```typescript
 * backgroundRed("Vangware"); // "\x1b[41mVangware\x1b[49m"
 * // It can also be used as a tag function for tagged templates:
 * backgroundRed`Vangware`; // "\x1b[41mVangware\x1b[49m"
 * ```
 * @returns `input` string with **red** background.
 */
export const backgroundRed = backgroundColor(41);
