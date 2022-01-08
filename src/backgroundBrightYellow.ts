import { backgroundColor } from "./backgroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **bright yellow**
 * background.
 *
 * @category Background
 * @example
 * ```typescript
 * backgroundBrightYellow("Vangware"); // "\x1b[103mVangware\x1b[49m"
 * // It can also be used as a tag function for tagged templates:
 * backgroundBrightYellow`Vangware`; // "\x1b[103mVangware\x1b[49m"
 * ```
 * @returns `input` string with **bright yellow** background.
 */
export const backgroundBrightYellow = backgroundColor(103);
