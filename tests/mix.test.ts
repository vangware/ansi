import { deepEqual } from "assert/strict";
import { format } from "../src/format";
import { mix } from "../src/mix";

const first = format(13)(13);
const second = format(42)(42);
const mixed = mix([first, second]);

export default deepEqual(
	mixed("foobar"),
	second(first("foobar")),
	`Given an string and a mix of 2 functions,
	must return that string surrounded by the expected values`
);
