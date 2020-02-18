# biobe_validators

## Getting started

#### Install with NPM

```
$ npm install biobe-validators --save
```

#### Install with Yarn

```
$ yarn add biobe-validators
```

#### How to use with ES6

#### CPF

```js
import { isCpf } from "biobe-validators";

// No points or hyphens
isCpf("29018170097"); // false
isCpf("12312345600"); // false

// With points or hyphens
isCpf("123.123.456-00"); // false
```

#### CNPJ

```js
import { isCnpj, isCpf, isCep } from "biobe-validators";

// No points or hyphens
isCnpj("54334068000136"); // true
isCnpj("00111222000100"); // false

// With points or hyphens
isCnpj("54.334.068/0001-36"); // true
```

#### How to use with ES5

```js
const validator = require("biobe-validators");

// No points or hyphens
validator.isCnpj("54334068000136"); // true
validator.isCnpj("00111222000100"); // false
validator.isCpf("29018170097"); // true
validator.isCpf("12312345600"); // false

// With points or hyphens
validator.isCnpj("54.334.068/0001-36"); // true
validator.isCpf("123.123.456-00"); // false
```
