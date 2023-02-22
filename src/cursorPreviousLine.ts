import { controlSequenceIntroducer } from "./controlSequenceIntroducer.js";

/**
 * Moves cursor to beginning of the line `input` lines up.
 *
 * @category Cursor
 * @example
 * ```typescript
 * cursorPreviousLine(13); // "\x1b[13F"
 * ```
 * @param input Amount of lines up.
 * @returns CPL sequence.
 */
export const cursorPreviousLine = controlSequenceIntroducer("F");
