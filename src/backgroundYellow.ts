import { backgroundColor } from "./backgroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **yellow** background.
 *
 * @category Background
 * @example
 * ```typescript
 * backgroundYellow("Vangware"); // "\x1b[43mVangware\x1b[49m"
 * // It can also be used as a tag function for tagged templates:
 * backgroundYellow`Vangware`; // "\x1b[43mVangware\x1b[49m"
 * ```
 * @returns `input` string with **yellow** background.
 */
export const backgroundYellow = backgroundColor(43);
