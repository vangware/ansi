import { deepEqual } from "node:assert/strict";
import { ansi } from "../dist/require/ansi.js";

export default deepEqual(
	ansi(1),
	"\x1b[1m",
	"Given a number 1, must return that number with the ANSI scape sequence"
);
