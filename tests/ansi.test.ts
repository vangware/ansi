import { deepEqual } from "assert/strict";
import { ansi } from "../src/ansi";

export default deepEqual(
	ansi(1),
	"\x1b[1m",
	"Given a number 1, must return that number with the ANSI scape sequence"
);
