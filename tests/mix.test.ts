import { suite } from "@vangware/test";
import { mix } from "../src/mix";

const fancy = mix([source => `*${source}*`, source => `_${source}_`]);

export default suite([
	{
		given: "an string and a mix of 2 functions",
		must: "return that string surrounded by the expected values",
		received: fancy("foobar"),
		wanted: "*_foobar_*"
	}
]);
