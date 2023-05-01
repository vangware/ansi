import { deepEqual } from "node:assert/strict";
import { describe, it } from "node:test";
import { fileURLToPath } from "node:url";
import type { Tests } from "./types/Tests.js";

export const test = (fileURL: string) => {
	const relativePath = fileURLToPath(fileURL).replace(
		globalThis.process.cwd(),
		".",
	);

	return <Value = unknown>(...tests: Tests<Value>) =>
		describe(relativePath, _ =>
			tests.forEach(({ given, must, received, wanted }) =>
				it(`Given ${given}, must ${must}.`, async () =>
					deepEqual(await received(), await wanted())),
			),
		);
};
