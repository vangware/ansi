import { deepEqual } from "node:assert/strict";
import { format } from "../dist/format.js";

export default [
	deepEqual(
		format(2)(1)("foobar"),
		"\x1b[1mfoobar\x1b[2m",
		`Given a number 1, a number 2 and a string,
	must return that string wrapped with ansi for 1 and for 2`,
	),
	deepEqual(
		format(2)(1)`foobar ${10}`,
		"\x1b[1mfoobar 10\x1b[2m",
		`Given a number 1, a number 2 and a template literal,
	must return that template literal as a string wrapped with ansi for 1 and for 2`,
	),
];
