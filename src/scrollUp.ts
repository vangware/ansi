import { controlSequenceIntroducer } from "./controlSequenceIntroducer.js";

/**
 * Scroll whole page up by `input` lines. New lines are added at the bottom.
 *
 * @category Scroll
 * @example
 * ```typescript
 * scrollUp(13); // "\x1b[13S"
 * ```
 * @param input Amount of lines up.
 * @returns SU sequence.
 */
export const scrollUp = controlSequenceIntroducer("S");
