require('dotenv').config();

// Add custom serializer for BigInt
// expect.addSnapshotSerializer({
//   test: (val) => typeof val === 'bigint',
//   print: (val) => val.toString()
// });

// Add BigInt serialization support
if (typeof BigInt.prototype.toJSON !== 'function') {
  BigInt.prototype.toJSON = function() {
    return this.toString();
  };
}

// Add custom matcher for BigInt
// expect.extend({
//   toBeBigInt(received) {
//     const pass = typeof received === 'bigint';
//     return {
//       message: () => `expected ${received} to be BigInt`,
//       pass,
//     };
//   },
// });