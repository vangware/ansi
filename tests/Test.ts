import { deepEqual } from "node:assert/strict";
import { describe, it } from "node:test";
import { fileURLToPath } from "node:url";
import type { Tests } from "./types/Tests.js";

export const test = <Value = unknown>(
	fileURL: string,
	...tests: Tests<Value>
) =>
	describe(fileURLToPath(fileURL).replace(globalThis.process.cwd(), "."), _ =>
		tests.forEach(({ given, must, received, wanted }) =>
			it(`Given ${given}, must ${must}.`, async () =>
				deepEqual(await received(), await wanted())),
		),
	);
