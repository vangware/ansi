> This repository's code was moved to [lou.codes](https://lou.codes).

---

<img id="logo" alt="ANSI by Vangware" src="./logo.svg" height="128" />

![Coverage][coverage-badge] ![License][license-badge]
![NPM Version][npm-version-badge] ![Open Issues][open-issues-badge]

📟 Functional CLI ANSI formatting functions.

## Usage

### 📦 Node

Install `@vangware/ansi` as a dependency:

```bash
pnpm add @vangware/ansi
# or
npm install @vangware/ansi
# or
yarn add @vangware/ansi
```

Import it and use it:

```typescript
import { foregroundRed } from "@vangware/ansi";

foregroundRed`Hello world!`; // "Hello world!" in red text.
```

### 🦕 Deno

Import `@vangware/ansi` using the `npm:` prefix, and use it directly:

```typescript
import { foregroundRed } from "npm:@vangware/ansi";

foregroundRed`Hello world!`; // "Hello world!" in red text.
```

### 🌎 Browser

Import `@vangware/ansi` using [esm.sh][esm.sh], and use it directly:

```html
<script type="module">
	import { foregroundRed } from "https://esm.sh/@vangware/ansi";

	foregroundRed`Hello world!`; // "Hello world!" in red text.
</script>
```

## Useful links

-   📝 [Documentation][documentation]: TypeDoc generated documentation.
-   ⏳ [Changelog][changelog]: List of changes between versions.
-   ✅ [Tests Coverage][coverage]: Coveralls page with tests coverage.

<!-- Reference -->

[changelog]: https://github.com/vangware/ansi/blob/main/CHANGELOG.md
[coverage-badge]:
	https://img.shields.io/coveralls/github/vangware/ansi.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://coveralls.io/github/vangware/ansi
[coverage]: https://coveralls.io/github/vangware/ansi
[documentation]: https://ansi.vangware.com
[esm.sh]: https://esm.sh
[license-badge]:
	https://img.shields.io/npm/l/@vangware/ansi.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://github.com/vangware/ansi/blob/main/LICENSE
[npm-version-badge]:
	https://img.shields.io/npm/v/@vangware/ansi.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://npm.im/@vangware/ansi
[open-issues-badge]:
	https://img.shields.io/github/issues/vangware/ansi.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://github.com/vangware/ansi/issues
