import { suite } from "@vangware/test";
import { ansi } from "../src/ansi";

export default suite([
	{
		given: "a number 1",
		must: "return that number with the ANSI scape sequence",
		received: ansi(1),
		wanted: "\x1b[1m"
	}
]);
