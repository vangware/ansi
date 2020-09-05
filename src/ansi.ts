/**
 * Takes a `source` number and returns the escape ANSI sequence.
 * @param source Source to escape.
 * @returns Escaped ANSI sequence.
 */
export const ansi = (source: number) => `\x1b[${source}m`;
