/**
 * Takes an `input` number and returns the escape ANSI sequence.
 *
 * @category Common
 * @param input Input to escape.
 * @returns Escaped ANSI sequence.
 */
export const ansi = <Input extends number>(input: Input) =>
	`\x1b[${input}m` as const;
