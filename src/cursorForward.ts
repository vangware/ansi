import { controlSequenceIntroducer } from "./controlSequenceIntroducer.js";

/**
 * Moves the cursor `input` cells forward.
 * If the cursor is already at the edge of the screen, this has no effect.
 *
 * @category Cursor
 * @example
 * ```typescript
 * cursorForward(13); // "\x1b[13C"
 * ```
 * @param input Amount of cells forward.
 * @returns CUF sequence.
 */
export const cursorForward = controlSequenceIntroducer("C");
