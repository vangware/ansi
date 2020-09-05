![@vangware/forcli](https://i.imgur.com/CFLNpNS.png)

![License](https://img.shields.io/npm/l/@vangware/forcli.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://github.com/vangware/forcli/blob/master/LICENSE)
![NPM Version](https://img.shields.io/npm/v/@vangware/forcli.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://npm.im/@vangware/forcli)
![Open Issues](https://img.shields.io/github/issues/vangware/forcli.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://github.com/vangware/forcli/issues)
![Size](https://img.shields.io/bundlephobia/minzip/@vangware/forcli.svg?style=for-the-badge&labelColor=666&color=2b7&label=size&link=https://bundlephobia.com/result?p=@vangware/forcli)

:art: CLI ANSI formatter.

## Usage

```js
import { whiteText, redBackground, bold, mix } from "@vangware/forcli";

const warningText = mix([whiteText, redBackground, bold]);

console.log(warningText("Warning!"));
```

## Changelog

Changelog can be found [HERE](https://github.com/vangware/forcli/blob/master/CHANGELOG.md).
