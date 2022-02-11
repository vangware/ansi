import { formattingEnabled } from "../dist/formattingEnabled.js";

/** @type {import(".").Tests<boolean>} */
export default [
	{
		given: "a process mock with no env or stdout",
		must: "return true",
		received: formattingEnabled({}),
		wanted: true,
	},
	{
		given: "a process mock with stdout isTTY set to true",
		must: "return true",
		received: formattingEnabled({ stdout: { isTTY: true } }),
		wanted: true,
	},
	{
		given: "a process with NODE_DISABLE_COLORS set to 1",
		must: "return false",
		received: formattingEnabled({ env: { NODE_DISABLE_COLORS: "1" } }),
		wanted: false,
	},
	{
		given: "a process mock with env NO_COLOR set to 1",
		must: "return false",
		received: formattingEnabled({ env: { NO_COLOR: "1" } }),
		wanted: false,
	},
	{
		given: "a process mock with env TERM set to dumb",
		must: "return false",
		received: formattingEnabled({ env: { TERM: "dumb" } }),
		wanted: false,
	},
	{
		given: "a process mock FORCE_COLOR 0 and isTTY",
		must: "return true",
		received: formattingEnabled({
			env: { FORCE_COLOR: "0" },
			stdout: { isTTY: true },
		}),
		wanted: true,
	},
	{
		given: "a process mock FORCE_COLOR 0 and no isTTY",
		must: "return false",
		received: formattingEnabled({
			env: { FORCE_COLOR: "0" },
			stdout: { isTTY: false },
		}),
		wanted: false,
	},
	{
		given: "a process mock FORCE_COLOR 1 and isTTY",
		must: "return true",
		received: formattingEnabled({
			env: { FORCE_COLOR: "1" },
			stdout: { isTTY: true },
		}),
		wanted: true,
	},
	{
		given: "a process mock FORCE_COLOR 1 and no isTTY",
		must: "return true",
		received: formattingEnabled({
			env: { FORCE_COLOR: "1" },
			stdout: { isTTY: false },
		}),
		wanted: true,
	},
];
