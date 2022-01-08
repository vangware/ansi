import { backgroundColor } from "./backgroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **white** background.
 *
 * @category Background
 * @example
 * ```typescript
 * backgroundWhite("Vangware"); // "\x1b[47mVangware\x1b[49m"
 * // It can also be used as a tag function for tagged templates:
 * backgroundWhite`Vangware`; // "\x1b[47mVangware\x1b[49m"
 * ```
 * @returns `input` string with **white** background.
 */
export const backgroundWhite = backgroundColor(47);
