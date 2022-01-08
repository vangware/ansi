import { backgroundColor } from "./backgroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **bright red**
 * background.
 *
 * @category Background
 * @example
 * ```typescript
 * backgroundBrightRed("Vangware"); // "\x1b[101mVangware\x1b[49m"
 * // It can also be used as a tag function for tagged templates:
 * backgroundBrightRed`Vangware`; // "\x1b[101mVangware\x1b[49m"
 * ```
 * @returns `input` string with **bright red** background.
 */
export const backgroundBrightRed = backgroundColor(101);
