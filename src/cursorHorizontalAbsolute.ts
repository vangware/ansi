import { controlSequenceIntroducer } from "./controlSequenceIntroducer.js";

/**
 * Moves cursor to the column `input`.
 *
 * @category Cursor
 * @example
 * ```typescript
 * cursorHorizontalAbsolute(13); // "\x1b[13G"
 * ```
 * @param input Column number.
 * @returns CHA sequence.
 */
export const cursorHorizontalAbsolute = controlSequenceIntroducer("G");
