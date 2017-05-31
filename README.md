# Covefe

A node module that converts streams of text into Trump-talk.

## Installation

Install using yarn:

```shell
yarn add covefe
```

Install using npm:

```shell
npm install covefe
```

## Usage

The `covefe` node module is a stream transform:

```js
const fs = require('fs');
const covefe = require('covefe');

// Read foo.txt, convert text with covefe, and output to stdout
fs.createReadStream('foo.txt')
  .pipe(covefe)
  .pipe(process.stdout);
```

The `covefe` CLI command reads and converts stdin:

```shell
echo "What is your code coverage?" | covefe
> What is your code covefe?
```
