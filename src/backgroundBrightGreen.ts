import { backgroundColor } from "./backgroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **bright green**
 * background.
 *
 * @category Background
 * @example
 * ```typescript
 * backgroundBrightGreen("Vangware"); // "\x1b[102mVangware\x1b[49m"
 * // It can also be used as a tag function for tagged templates:
 * backgroundBrightGreen`Vangware`; // "\x1b[102mVangware\x1b[49m"
 * ```
 * @returns `input` string with **bright green** background.
 */
export const backgroundBrightGreen = backgroundColor(102);
