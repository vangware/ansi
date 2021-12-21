import { backgroundColor } from "./backgroundColor.js";

/**
 * Takes an `input` string and adds the ANSI codes for **bright white**
 * background.
 *
 * @category Background
 * @example
 * ```typescript
 * backgroundBrightWhite("Foo"); // "\x1b[107mFoo\x1b[49m"
 * backgroundBrightWhite("Bar"); // "\x1b[107mBar\x1b[49m"
 * ```
 * @returns `input` string with **bright white** background.
 */
export const backgroundBrightWhite = backgroundColor(107);
