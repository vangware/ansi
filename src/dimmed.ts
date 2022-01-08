import { optionalFormat } from "./optionalFormat.js";

/**
 * Takes an `input` string and adds the ANSI codes for **dimmed** text.
 *
 * @category Text
 * @example
 * ```typescript
 * dimmed("Vangware"); // "\x1b[2mVangware\x1b[22m"
 * // It can also be used as a tag function for tagged templates:
 * dimmed`Vangware`; // "\x1b[2mVangware\x1b[22m"
 * ```
 * @returns `input` string with **dimmed** format.
 */
export const dimmed = optionalFormat(22)(2);
