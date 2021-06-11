import { deepEqual } from "assert/strict";
import { mix } from "../src/mix";

const fancy = mix([source => `*${source}*`, source => `_${source}_`]);

export default deepEqual(
	fancy("foobar"),
	"*_foobar_*",
	`Given an string and a mix of 2 functions,
	must return that string surrounded by the expected values`
);
