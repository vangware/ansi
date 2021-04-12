import type { format } from "./format";

/**
 * Composes formatters.
 * @param formatters Array of formatters to be composed.
 */
export const mix = (
	formatters: ReadonlyArray<ReturnType<ReturnType<typeof format>>>
) => (source: string) =>
	// eslint-disable-next-line max-params
	formatters.reduceRight((output, formatter) => formatter(output), source);
