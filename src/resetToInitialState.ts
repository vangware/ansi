import { escapeSequence } from "./escapeSequence.js";

/**
 * RIS sequence. Resets the entire screen to initial state.
 */
export const resetToInitialState = escapeSequence("c");
