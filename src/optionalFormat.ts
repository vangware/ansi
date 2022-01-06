import { format } from "./format.js";
import { formattingEnabled } from "./formattingEnabled.js";

/**
 * Impure version of `format` which changes depending on the current NodeJS
 * `process` environment.
 *
 * @category Common
 * @param process NodeJS `process`.
 */
export const optionalFormat = formattingEnabled(process)
	? format
	: (_close: number) =>
			(_open: number) =>
			<Input extends string>(
				input: Input | TemplateStringsArray,
				...values: ReadonlyArray<unknown>
			) =>
				typeof input === "string"
					? input
					: input
							.flatMap((string, index) => [string, values[index]])
							.join("");
