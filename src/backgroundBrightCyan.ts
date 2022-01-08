import { backgroundColor } from "./backgroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **bright cyan**
 * background.
 *
 * @category Background
 * @example
 * ```typescript
 * backgroundBrightCyan("Vangware"); // "\x1b[106mVangware\x1b[49m"
 * // It can also be used as a tag function for tagged templates:
 * backgroundBrightCyan`Vangware`; // "\x1b[106mVangware\x1b[49m"
 * ```
 * @returns `input` string with **bright cyan** background.
 */
export const backgroundBrightCyan = backgroundColor(106);
