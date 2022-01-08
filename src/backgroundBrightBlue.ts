import { backgroundColor } from "./backgroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **bright blue**
 * background.
 *
 * @category Background
 * @example
 * ```typescript
 * backgroundBrightBlue("Vangware"); // "\x1b[104mVangware\x1b[49m"
 * // It can also be used as a tag function for tagged templates:
 * backgroundBrightBlue`Vangware`; // "\x1b[104mVangware\x1b[49m"
 * ```
 * @returns `input` string with **bright blue** background.
 */
export const backgroundBrightBlue = backgroundColor(104);
