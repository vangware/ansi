import { backgroundColor } from "./backgroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **bright magenta**
 * background.
 *
 * @category Background
 * @example
 * ```typescript
 * backgroundBrightMagenta("Vangware"); // "\x1b[105mVangware\x1b[49m"
 * // It can also be used as a tag function for tagged templates:
 * backgroundBrightMagenta`Vangware`; // "\x1b[105mVangware\x1b[49m"
 * ```
 * @returns `input` string with **bright magenta** background.
 */
export const backgroundBrightMagenta = backgroundColor(105);
