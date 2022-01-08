import { backgroundColor } from "./backgroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **black** background.
 *
 * @category Background
 * @example
 * ```typescript
 * backgroundBlack("Vangware"); // "\x1b[40mVangware\x1b[49m"
 * // It can also be used as a tag function for tagged templates:
 * backgroundBlack`Vangware`; // "\x1b[40mVangware\x1b[49m"
 * ```
 * @returns `input` string with **black** background.
 */
export const backgroundBlack = backgroundColor(40);
