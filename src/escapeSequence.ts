/**
 * Takes an `input` string and returns an escaped sequence.
 *
 * @category Common
 * @example
 * ```typescript
 * escapeSequence("Vangware"); // "\x1bVangware"
 * ```
 * @param input String to escape.
 * @returns String with ESC character prepended.
 */
export const escapeSequence = <Input extends string>(input: Input) =>
	`\x1b${input}` as const;
