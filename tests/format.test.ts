import { suite } from "@vangware/test";
import { format } from "../src/format";

export default suite([
	{
		given: "a number 1, a number 2 and a string",
		must: "return that string wrapped with ansi for 1 and for 2",
		received: format(2)(1)("foobar"),
		wanted: "\x1b[1mfoobar\x1b[2m"
	}
]);
