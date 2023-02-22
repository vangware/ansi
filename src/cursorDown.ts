import { controlSequenceIntroducer } from "./controlSequenceIntroducer.js";

/**
 * Moves the cursor `input` cells down.
 * If the cursor is already at the edge of the screen, this has no effect.
 *
 * @category Cursor
 * @example
 * ```typescript
 * cursorDown(13); // "\x1b[13B"
 * ```
 * @param input Amount of cells down.
 * @returns CUD sequence.
 */
export const cursorDown = controlSequenceIntroducer("B");
