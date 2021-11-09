/**
 * Takes an `input` number and returns the escape ANSI sequence.
 *
 * @category Common
 * @example
 * ```typescript
 * ansi(13); // "\x1b[13m"
 * ansi(42); // "\x1b[42m"
 * ```
 * @param input Input to escape.
 * @returns Escaped ANSI sequence.
 */
export const ansi = <Input extends number>(input: Input) =>
	`\x1b[${input}m` as const;
