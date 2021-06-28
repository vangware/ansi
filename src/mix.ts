import type { format } from "./format";

/**
 * Composes formatters.
 *
 * @category Common
 * @param formatters Array of formatters to be composed.
 */
export const mix =
	(formatters: ReadonlyArray<ReturnType<ReturnType<typeof format>>>) =>
	(input: string) =>
		formatters.reduce(
			// eslint-disable-next-line max-params
			(output, formatter) => formatter(output),
			input
		);
