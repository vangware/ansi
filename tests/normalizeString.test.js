import { normalizeString } from "../src/normalizeString.js";

/** @type {import("./index.js").Tests<string>} */
export default [
	{
		given: "a plain string",
		must: "return that same string",
		received: normalizeString("🟢"),
		wanted: "🟢",
	},
	{
		given: "a template string",
		must: "return it as a string",
		received: normalizeString`${13}`,
		wanted: "13",
	},
];
