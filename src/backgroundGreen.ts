import { backgroundColor } from "./backgroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **green** background.
 *
 * @category Background
 * @example
 * ```typescript
 * backgroundGreen("Vangware"); // "\x1b[42mVangware\x1b[49m"
 * // It can also be used as a tag function for tagged templates:
 * backgroundGreen`Vangware`; // "\x1b[42mVangware\x1b[49m"
 * ```
 * @returns `input` string with **green** background.
 */
export const backgroundGreen = backgroundColor(42);
