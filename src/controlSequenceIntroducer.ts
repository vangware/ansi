import { escapeSequence } from "./escapeSequence.js";

/**
 * Takes a `code` and an `input` number and returns the CSI sequence.
 *
 * @category Common
 * @example
 * ```typescript
 * const selectGraphicRendition = controlSequenceIntroducer("m");
 * selectGraphicRendition(13); // "\x1b[13m"
 * selectGraphicRendition(42); // "\x1b[42m"
 * ```
 * @param input Input to escape.
 * @returns CSI sequence.
 */
export const controlSequenceIntroducer =
	<Code extends string>(code: Code) =>
	<Input extends number | readonly [number | undefined, number | undefined]>(
		input: Input,
	) =>
		escapeSequence(
			`[${
				typeof input === "number"
					? input
					: (`${input[0] ?? ""};${input[1] ?? ""}` as const)
			}${code}` as `[${Input extends readonly [
				number | undefined,
				number | undefined,
			]
				? `${Input[0] extends number
						? Input[0]
						: ""};${Input[1] extends number ? Input[1] : ""}`
				: `${Input & number}`}${Code}`,
		);
