<img alt="Vangware's ANSI logo" src="./logo.svg" height="128" />

![Coverage][coverage-badge] ![License][license-badge]
![NPM Version][npm-version-badge] ![Open Issues][open-issues-badge]

📟 Functional CLI ANSI formatter.

## Usage

This package can be installed as a dependency or used directly.

### Usage as ECMAScript module

🦕 In JS or [deno][deno]:

```js
import { foregroundRed } from "https://esm.sh/@vangware/ansi";

foregroundRed`Hello world!`;
```

🌎 Or in the browser:

```html
<script type="module">
	import { foregroundRed } from "https://esm.sh/@vangware/ansi";

	foregroundRed`Hello world!`;
</script>
```

### Usage with local installation

First:

```bash
# If you use npm
npm install @vangware/ansi
# If you use pnpm
pnpm add @vangware/ansi
# If you use yarn
yarn add @vangware/ansi
```

And then:

```js
import { whiteText, redBackground, bold, mix } from "@vangware/ansi";

// You can just use the styles
console.log(redBackground`Red background text`);

// Or you can mix them!
const warningText = mix(whiteText, redBackground, bold);

console.log(warningText`Warning!`);
```

## Documentation

Documentation is available [HERE][documentation]. It is auto-generated with
[typedoc][typedoc] based on the JSDocs and the types in the source. It shouldn't
be necessary to read this. Code editors like [VS Code][vscode] integrate the
documentation in the UI.

## Changelog

Changelog can be found [HERE][changelog].

## Test coverage

Test coverage can be found [HERE][coverage].

<!-- Reference -->

[changelog]: https://github.com/vangware/ansi/blob/main/CHANGELOG.md
[coverage-badge]:
	https://img.shields.io/coveralls/github/vangware/ansi.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://coveralls.io/github/vangware/ansi
[coverage]: https://coveralls.io/github/vangware/ansi
[deno]: https://deno.land/
[documentation]: https://ansi.vangware.com
[license-badge]:
	https://img.shields.io/npm/l/@vangware/ansi.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://github.com/vangware/ansi/blob/main/LICENSE
[npm-version-badge]:
	https://img.shields.io/npm/v/@vangware/ansi.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://npm.im/@vangware/ansi
[open-issues-badge]:
	https://img.shields.io/github/issues/vangware/ansi.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://github.com/vangware/ansi/issues
[typedoc]: https://typedoc.org/
[vscode]: https://code.visualstudio.com/
