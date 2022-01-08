import { backgroundColor } from "./backgroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **gray** background.
 *
 * @category Background
 * @example
 * ```typescript
 * backgroundGray("Vangware"); // "\x1b[100mVangware\x1b[49m"
 * // It can also be used as a tag function for tagged templates:
 * backgroundGray`Vangware`; // "\x1b[100mVangware\x1b[49m"
 * ```
 * @returns `input` string with **gray** background.
 */
export const backgroundGray = backgroundColor(100);
