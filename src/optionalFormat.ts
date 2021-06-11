import { format } from "./format";
import { formattingEnabled } from "./formattingEnabled";

/**
 * Impure version of `format` which changes depending on the current NodeJS
 * `process` environment.
 *
 * @category Common
 * @param process NodeJS `process`.
 */
export const optionalFormat = formattingEnabled(process)
	? format
	: (_close: number) => (_open: number) => (source: string) => source;
