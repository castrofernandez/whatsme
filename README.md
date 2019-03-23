# whatsme
Library to process object types

1. Install 

```
npm install whatsme
```

2. Usage

```
import whatsme from 'whatsme';

whatsme.isNumber(3); // true
whatsme.whats('Something') // 'string'
```

3. Development

```
npm run dev
```

This watches files and compiles them

4. Run tests

```
npm test
```

`npm run dev` should be running to watch and recompile files.

5. List of methods

* isNull(variable): checks if variable is null.
* isUndefined(variable): checks if variable is undefined.
* isSymbol(variable): checks if variable is a symbol.
* isString(variable): checks if variable is a string.
* isNumber(variable); checks if variable is a number.
* isNaN(variable): checks if variable is NaN (Not a Number).
* isArray(variable): checks if variable is an array.
* isTrue(variable): checks if variable equals true strictly.
* isFalse(variable): checks if variable equals false strictly.
* isRegExp(variable): checks if variable is a regular expression.
* isDate(variable): checks if variable is an instance of Date.
* isObject(variable): checks if variable is a plain object.
* isNotNull(variable): checks if variable is not null.
* isDefined(variable): checks if variable is not undefined.
* isSomething(variable): checks if variable is defined (not null and not undefined).
* isBoolean(variable): checks if variable is a boolean (strictly true or false).
* isTruthy(variable): checks if variable is truhty (the opposite of falsy).
* isFalsy(variable): checks if variable is falsy: false, 0, '', undefined, null or NaN.
* isEmpty(variable): checks if variable is empty: falsy, or empty object ({}) or empty array ([]);
* isNotEmpty(variable): checks if variable is not empty. The opposite to isEmpty.
* whats(variable): returns a string with the type of the variable:
  * null
  * undefined
  * symbol
  * string
  * number
  * NaN
  * array
  * true
  * false
  * RegExp
  * Date
  * object