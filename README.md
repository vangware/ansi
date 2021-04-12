![@vangware/forcli](https://i.imgur.com/CFLNpNS.png)

![Build Status](https://img.shields.io/github/workflow/status/vangware/forcli/Test.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://github.com/vangware/forcli/actions)
![Coverage](https://img.shields.io/coveralls/github/vangware/forcli.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://coveralls.io/github/vangware/forcli)
![License](https://img.shields.io/npm/l/@vangware/forcli.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://github.com/vangware/forcli/blob/main/LICENSE)
![NPM Version](https://img.shields.io/npm/v/@vangware/forcli.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://npm.im/@vangware/forcli)
![Open Issues](https://img.shields.io/github/issues/vangware/forcli.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://github.com/vangware/forcli/issues)
![Size](https://img.shields.io/bundlephobia/minzip/@vangware/forcli.svg?style=for-the-badge&labelColor=666&color=2b7&label=size&link=https://bundlephobia.com/result?p=@vangware/forcli)

🎨 Functional CLI ANSI formatter.

## Usage

This package can be installed as a dependency or used directly.

### Usage as ECMAScript module

In JS or [deno](https://deno.land/):

```js
import { isObject } from "https://cdn.skypack.dev/@vangware/forcli";
```

Or in HTML:

```html
<script type="module" src="https://cdn.skypack.dev/@vangware/forcli"></script>
```

### Usage with local installation

First:

```bash
npm i @vangware/forcli
```

And then:

```js
import { whiteText, redBackground, bold, mix } from "@vangware/forcli";

// You can just use the styles
console.log(redBackground("Red background text"));

// Or you can mix them!
const warningText = mix([whiteText, redBackground, bold]);

console.log(warningText("Warning!"));
```

## Documentation

Documentation can be found [HERE](https://forcli.vangware.com). It is auto-generated with [typedoc](https://typedoc.org/) based on the JSDocs and the types in the source. Shouldn't be necessary to read this, code editors like [VSCode](https://code.visualstudio.com/) integrate the documentation in the UI.

## Changelog

Changelog can be found [HERE](https://github.com/vangware/forcli/blob/main/CHANGELOG.md).

## Test coverage

Test coverage can be found [HERE](https://coveralls.io/github/vangware/forcli).
