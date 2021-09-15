/**
 * Given a NodeJS `process`, return `true` if colors are enabled.
 *
 * @category Common
 * @param process NodeJS `process`.
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
	readonly env?: typeof process.env;
	readonly stdout?: Pick<typeof process.stdout, "isTTY">;
} = {}) =>
	nodeDisableColors === "" &&
	noColor === undefined &&
	term !== "dumb" &&
	(forceColor !== "0" || isTTY);
