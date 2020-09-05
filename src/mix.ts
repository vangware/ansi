/**
 * Composes formatters.
 * @param formatters Array of formatters to be composed.
 */
export const mix = (formatters: readonly ((source: string) => string)[]) => (
	source: string
) => formatters.reduceRight((output, formatter) => formatter(output), source);
