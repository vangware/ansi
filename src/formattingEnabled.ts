/**
 * Given a NodeJS `process`, return `true` if colors are enabled.
 *
 * @category Common
 * @example
 * ```typescript
 * formattingEnabled(globalThis.process); // false if colors were disabled in the process, true otherwise.
 * ```
 * @param process NodeJS `globalThis.process`.
 * @returns `true` if colors are enabled.
 */
export const formattingEnabled = ({
	env: {
		FORCE_COLOR: forceColor = "1",
		NODE_DISABLE_COLORS: nodeDisableColors = "",
		NO_COLOR: noColor,
		TERM: term,
	} = {},
	stdout: { isTTY } = { isTTY: false },
}: {
	readonly env?: typeof globalThis.process.env;
	readonly stdout?: Pick<typeof globalThis.process.stdout, "isTTY">;
} = {}) =>
	nodeDisableColors === "" &&
	noColor === undefined &&
	term !== "dumb" &&
	(forceColor !== "0" || isTTY);
