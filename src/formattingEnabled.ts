/**
 * Given a NodeJS `process`, return `true` if colors are enabled.
 * @param process NodeJS `process`.
 */
export const formattingEnabled = ({
	env: { FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM } = {},
	stdout: { isTTY } = { isTTY: false }
}: {
	readonly env?: typeof process.env;
	readonly stdout?: Pick<typeof process.stdout, "isTTY">;
} = {}) =>
	!NODE_DISABLE_COLORS &&
	!NO_COLOR &&
	TERM !== "dumb" &&
	(!FORCE_COLOR || isTTY);
