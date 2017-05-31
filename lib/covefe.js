const through2 = require('through2');

// eslint-disable-next-line prefer-arrow-callback
module.exports = through2.obj(function transform(chunk, encoding, callback) {
  callback(null, chunk.toString().replace(/rag/gi, 'f'));
});
