import { controlSequenceIntroducer } from "./controlSequenceIntroducer.js";

/**
 * Moves the cursor `input` cells back.
 * If the cursor is already at the edge of the screen, this has no effect.
 *
 * @category Cursor
 * @example
 * ```typescript
 * cursorBack(13); // "\x1b[13C"
 * ```
 * @param input Amount of cells back.
 * @returns CUB sequence.
 */
export const cursorBack = controlSequenceIntroducer("D");
