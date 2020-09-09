import { format } from "./format";

/**
 * Composes formatters.
 * @param formatters Array of formatters to be composed.
 */
export const mix = (
	formatters: readonly ReturnType<ReturnType<typeof format>>[]
) => (source: string) =>
	formatters.reduceRight((output, formatter) => formatter(output), source);
