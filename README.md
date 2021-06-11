![@vangware/ansi](https://i.imgur.com/SeAHpKe.png)

![Build Status](https://img.shields.io/github/workflow/status/vangware/ansi/Test.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://github.com/vangware/ansi/actions)
![Coverage](https://img.shields.io/coveralls/github/vangware/ansi.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://coveralls.io/github/vangware/ansi)
![License](https://img.shields.io/npm/l/@vangware/ansi.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://github.com/vangware/ansi/blob/main/LICENSE)
![NPM Version](https://img.shields.io/npm/v/@vangware/ansi.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://npm.im/@vangware/ansi)
![Open Issues](https://img.shields.io/github/issues/vangware/ansi.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://github.com/vangware/ansi/issues)
![Size](https://img.shields.io/bundlephobia/minzip/@vangware/ansi.svg?style=for-the-badge&labelColor=666&color=2b7&label=size&link=https://bundlephobia.com/result?p=@vangware/ansi)

📟 Functional CLI ANSI formatter.

## Usage

This package can be installed as a dependency or used directly.

### Usage as ECMAScript module

🦕 In JS or [deno](https://deno.land/):

```js
import { isObject } from "https://cdn.skypack.dev/@vangware/ansi";
```

🌎 Or in HTML:

```html
<script type="module" src="https://cdn.skypack.dev/@vangware/ansi"></script>
```

### Usage with local installation

First:

```bash
npm i @vangware/ansi
```

And then:

```js
import { whiteText, redBackground, bold, mix } from "@vangware/ansi";

// You can just use the styles
console.log(redBackground("Red background text"));

// Or you can mix them!
const warningText = mix([whiteText, redBackground, bold]);

console.log(warningText("Warning!"));
```

## Documentation

Documentation can be found [HERE](https://ansi.vangware.com). It is auto-generated with [typedoc](https://typedoc.org/) based on the JSDocs and the types in the source. Shouldn't be necessary to read this, code editors like [VSCode](https://code.visualstudio.com/) integrate the documentation in the UI.

## Changelog

Changelog can be found [HERE](https://github.com/vangware/ansi/blob/main/CHANGELOG.md).

## Test coverage

Test coverage can be found [HERE](https://coveralls.io/github/vangware/ansi).
