import { controlSequenceIntroducer } from "./controlSequenceIntroducer.js";

/**
 * Moves cursor to beginning of the line `input` lines down.
 *
 * @category Cursor
 * @example
 * ```typescript
 * cursorNextLine(13); // "\x1b[13E"
 * ```
 * @param input Amount of lines down.
 * @returns CNL sequence.
 */
export const cursorNextLine = controlSequenceIntroducer("E");
