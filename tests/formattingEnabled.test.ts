import { suite } from "@vangware/test";
import { formattingEnabled } from "../src/formattingEnabled";

export default suite([
	{
		given: "a process mock with no env or stdout",
		must: "return true",
		received: formattingEnabled({}),
		wanted: true
	},
	{
		given: "a process mock with stdout isTTY set to true",
		must: "return true",
		received: formattingEnabled({ stdout: { isTTY: true } }),
		wanted: true
	},
	{
		given: "a process mock with env NODE_DISABLE_COLORS set to 1",
		must: "return false",
		received: formattingEnabled({ env: { NODE_DISABLE_COLORS: "1" } }),
		wanted: false
	},
	{
		given: "a process mock with env NO_COLOR set to 1",
		must: "return false",
		received: formattingEnabled({ env: { NO_COLOR: "1" } }),
		wanted: false
	},
	{
		given: "a process mock with env TERM set to dumb",
		must: "return false",
		received: formattingEnabled({ env: { TERM: "dumb" } }),
		wanted: false
	},
	{
		given: "a process mock with env FORCE_COLOR 1 and isTTY set to true",
		must: "return true",
		received: formattingEnabled({
			env: { FORCE_COLOR: "1" },
			stdout: { isTTY: true }
		}),
		wanted: true
	},
	{
		given: "a process mock with env FORCE_COLOR 1 and isTTY set to false",
		must: "return false",
		received: formattingEnabled({
			env: { FORCE_COLOR: "1" },
			stdout: { isTTY: false }
		}),
		wanted: false
	}
]);
