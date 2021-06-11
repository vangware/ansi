/**
 * Given a NodeJS `process`, return `true` if colors are enabled.
 *
 * @category Common
 * @param process NodeJS `process`.
 */
export const formattingEnabled = ({
	env: {
		FORCE_COLOR: forceColor = "",
		NODE_DISABLE_COLORS: nodeDisableColors = "",
		NO_COLOR: noColor = "",
		TERM: term
	} = {},
	stdout: { isTTY } = { isTTY: false }
}: {
	readonly env?: typeof process.env;
	readonly stdout?: Pick<typeof process.stdout, "isTTY">;
} = {}) =>
	nodeDisableColors === "" &&
	noColor === "" &&
	term !== "dumb" &&
	(forceColor === "" || isTTY);
