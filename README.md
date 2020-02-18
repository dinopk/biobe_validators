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
import { cpfValidation } from "biobe-validators";

// No points or hyphens
cpfValidation("29018170097"); // false
cpfValidation("12312345600"); // false

// With points or hyphens
cpfValidation("123.123.456-00"); // false
```

#### CNPJ

```js
import { cnpjValidation, cpfValidation } from "biobe-validators";

// No points or hyphens
cnpjValidation("54334068000136"); // true
cnpjValidation("00111222000100"); // false

// With points or hyphens
cnpjValidation("54.334.068/0001-36"); // true
```

#### How to use with ES5

```js
const validator = require("biobe-validators");

// No points or hyphens
validator.cnpjValidation("54334068000136"); // true
validator.cnpjValidation("00111222000100"); // false
validator.cpfValidation("29018170097"); // true
validator.cpfValidation("12312345600"); // false

// With points or hyphens
validator.cnpjValidation("54.334.068/0001-36"); // true
validator.cpfValidation("123.123.456-00"); // false
```
