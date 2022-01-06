import { deepEqual } from "node:assert/strict";
import { format } from "../dist/format.js";
import { mix } from "../dist/mix.js";

const first = format(13)(13);
const second = format(42)(42);
const mixed = mix([first, second]);

export default [
	deepEqual(
		mixed("foobar"),
		second(first("foobar")),
		`Given an string and a mix of 2 functions,
	must return that string surrounded by the expected values`,
	),
	deepEqual(
		mixed`foobar ${10}`,
		second`${first`foobar ${10}`}`,
		`Given an template literal and a mix of 2 functions,
	must return that template literal surrounded by the expected values`,
	),
];
