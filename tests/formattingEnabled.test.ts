import { deepEqual } from "assert/strict";
import { formattingEnabled } from "../src/formattingEnabled";

export default [
	deepEqual(
		formattingEnabled({}),
		true,
		"Given a process mock with no env or stdout, must return true"
	),
	deepEqual(
		formattingEnabled({ stdout: { isTTY: true } }),
		true,
		"Given a process mock with stdout isTTY set to true, must return true"
	),
	deepEqual(
		formattingEnabled({ env: { NODE_DISABLE_COLORS: "1" } }),
		false,
		"Given a process with NODE_DISABLE_COLORS set to 1, must return false"
	),
	deepEqual(
		formattingEnabled({ env: { NO_COLOR: "1" } }),
		false,
		"Given a process mock with env NO_COLOR set to 1, must return false"
	),
	deepEqual(
		formattingEnabled({ env: { TERM: "dumb" } }),
		false,
		"Given a process mock with env TERM set to dumb, must return false"
	),
	deepEqual(
		formattingEnabled({
			env: { FORCE_COLOR: "1" },
			stdout: { isTTY: true }
		}),
		true,
		"Given a process mock FORCE_COLOR 1 and isTTY, must return true"
	),
	deepEqual(
		formattingEnabled({
			env: { FORCE_COLOR: "1" },
			stdout: { isTTY: false }
		}),
		false,
		"Given a process mock FORCE_COLOR 1 and no isTTY, must return false"
	)
];
