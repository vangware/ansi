/**
 * Composes formatters.
 *
 * @category Common
 * @param formatters Array of formatters to be composed.
 */
export const mix =
	(formatters: ReadonlyArray<(input: string) => string>) => (input: string) =>
		formatters.reduce(
			// eslint-disable-next-line max-params
			(output, formatter) => formatter(output),
			input
		);
