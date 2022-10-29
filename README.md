# What is the weekday?

The idea with this package is to return to you the weekday from a JavaScript `Date` object.

## Installation

This library is available as a [npm package](https://npmjs.com/package/what-is-the-weekday). You can install:

```
npm install what-is-the-weekday --save
# or using yarn
yarn add what-is-the-weekday
```

## Usage

```
const whatIsTheWeekday = require('what-is-the-weekday');

const date = new Date('2018-01-01');

console.log(whatIsTheWeekday({ date }));
// => Monday
```

This package is also available in Brazilian Portuguese!

```
const whatIsTheWeekday = require('what-is-the-weekday');

console.log(whatIsTheWeekday({ date: new Date('2018-01-01'), lang: 'pt-br' }));
// => Segunda-Feira
```
