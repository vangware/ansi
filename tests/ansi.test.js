import { ansi } from "../dist/ansi.js";

/** @type {import("./index.js").Tests<string>} */
export default [
	{
		given: "a number 13",
		must: "return that number with the ANSI scape sequence",
		received: ansi(13),
		wanted: "\x1b[13m",
	},
];
