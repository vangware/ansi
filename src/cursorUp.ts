import { controlSequenceIntroducer } from "./controlSequenceIntroducer.js";

/**
 * Moves the cursor `input` cells up.
 * If the cursor is already at the edge of the screen, this has no effect.
 *
 * @category Cursor
 * @example
 * ```typescript
 * cursorUp(13); // "\x1b[13A"
 * ```
 * @param input Amount of cells up.
 * @returns CUU sequence.
 */
export const cursorUp = controlSequenceIntroducer("A");
