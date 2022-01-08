import { backgroundColor } from "./backgroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **bright white**
 * background.
 *
 * @category Background
 * @example
 * ```typescript
 * backgroundBrightWhite("Vangware"); // "\x1b[107mVangware\x1b[49m"
 * // It can also be used as a tag function for tagged templates:
 * backgroundBrightWhite`Vangware`; // "\x1b[107mVangware\x1b[49m"
 * ```
 * @returns `input` string with **bright white** background.
 */
export const backgroundBrightWhite = backgroundColor(107);
