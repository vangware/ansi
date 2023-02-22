import { controlSequenceIntroducer } from "./controlSequenceIntroducer.js";

/**
 * Scroll whole page down by `input` lines. New lines are added at the top.
 *
 * @category Scroll
 * @example
 * ```typescript
 * scrollDown(13); // "\x1b[13S"
 * ```
 * @param input Amount of lines down.
 * @returns SD sequence.
 */
export const scrollDown = controlSequenceIntroducer("S");
