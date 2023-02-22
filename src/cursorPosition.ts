import { controlSequenceIntroducer } from "./controlSequenceIntroducer.js";

/**
 * Moves the cursor to position `input`.
 *
 * @category Cursor
 * @example
 * ```typescript
 * cursorPosition([13, 42]); // "\x1b[13;42H"
 * cursorPosition([undefined, 42]); // "\x1b[;42H"
 * cursorPosition([13, undefined]); // "\x1b[13;H"
 * ```
 * @param input Position (row, column)
 * @returns CUP sequence.
 */
export const cursorPosition = controlSequenceIntroducer("H");
