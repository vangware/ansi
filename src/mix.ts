/**
 * Composes formatters.
 *
 * @category Common
 * @example
 * ```ts
 * const redTextWhiteBackground = mix([foregroundRed, backgroundWhite]);
 *
 * redTextWhiteBackground("Foo"); // "\x1b[47m\x1b[31mFoo\x1b[39m\x1b[49m"
 * redTextWhiteBackground("Bar"); // "\x1b[47m\x1b[31mBar\x1b[39m\x1b[49m"
 * ```
 * @param formatters Array of formatters to be composed.
 */
export const mix =
	(
		formatters: ReadonlyArray<
			(
				input: TemplateStringsArray | string,
				...values: ReadonlyArray<unknown>
			) => string
		>,
	) =>
	(input: TemplateStringsArray | string, ...values: ReadonlyArray<unknown>) =>
		formatters.reduce(
			// eslint-disable-next-line max-params
			(output, formatter) => formatter(output, ...values),
			input,
		);
