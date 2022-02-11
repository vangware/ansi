import { deepEqual } from "node:assert/strict";
import { readdir } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const testDirectory = dirname(fileURLToPath(import.meta.url));
const testDirectoryRelative = testDirectory.replace(process.cwd(), ".");

/**
 * @template Value
 * @typedef Test
 * @property {string} given Given description.
 * @property {string} must Must description.
 * @property {Value} received Received value.
 * @property {Value} wanted Wanted value.
 */

/**
 * @template Value
 * @typedef {import("@vangware/types").ReadOnlyArray<Test<Value>>} Tests
 */

void readdir(testDirectory)
	.then(files =>
		Promise.all(
			files
				.filter(file => file.endsWith(".test.js"))
				.map(file =>
					import(`${testDirectory}/${file}`).then(
						({ default: tests = [] }) =>
							Promise.allSettled([
								`[TEST] ${testDirectoryRelative}/${file}`,
								...(Array.isArray(tests)
									? /** @type {Tests<unknown>} */ (tests).map(
											({
												given,
												must,
												received,
												wanted,
											}) => {
												const description = `Given ${given}, must ${must}.`;

												return new Promise(resolve =>
													resolve(
														deepEqual(
															received,
															wanted,
														),
													),
												)
													.then(
														() =>
															`[PASS] ${description}`,
													)
													.catch(() =>
														Promise.reject(
															`[FAIL] ${description}`,
														),
													);
											},
									  )
									: []),
							]),
					),
				),
		),
	)
	.then(results => {
		const flattenResults = results.flat();

		// eslint-disable-next-line no-console
		console.log(
			flattenResults
				.map(result =>
					result.status === "fulfilled"
						? result.value
						: // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
						  `${result.reason}`,
				)
				.join("\n"),
		);

		return flattenResults.some(({ status }) => status === "rejected")
			? 1
			: 0;
	})
	.then(code => process.exit(code));
