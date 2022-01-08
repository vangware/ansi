import { backgroundColor } from "./backgroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **blue** background.
 *
 * @category Background
 * @example
 * ```typescript
 * backgroundBlue("Vangware"); // "\x1b[44mVangware\x1b[49m"
 * // It can also be used as a tag function for tagged templates:
 * backgroundBlue`Vangware`; // "\x1b[44mVangware\x1b[49m"
 * ```
 * @returns `input` string with **blue** background.
 */
export const backgroundBlue = backgroundColor(44);
