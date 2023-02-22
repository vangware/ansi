import { controlSequenceIntroducer } from "./controlSequenceIntroducer.js";

/**
 * Takes an `input` number and returns the a SGR sequence.
 *
 * @category Common
 * @example
 * ```typescript
 * controlSequenceIntroducer(13); // "\x1b[13m"
 * controlSequenceIntroducer(42); // "\x1b[42m"
 * ```
 * @param input Input to escape.
 * @returns SGR sequence.
 */
export const selectGraphicRendition = controlSequenceIntroducer("m");
