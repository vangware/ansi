/**
 * Given a NodeJS `process`, return `true` if colors are enabled.
 * @param process NodeJS `process`.
 */
export const formattingEnabled = (process: NodeJS.Process) =>
	typeof process === "undefined" ||
	(!process.env.NODE_DISABLE_COLORS &&
		!process.env.NODE_DISABLE_COLORS &&
		process.env.TERM !== "dumb" &&
		// eslint-disable-next-line no-null/no-null
		(![null, undefined, "0"].some(
			value => process.env.FORCE_COLOR === value
		) ||
			process.stdout.isTTY));
