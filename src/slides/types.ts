// tuples
const z: 0 = 0
const pair: [string, number] = ['Bram', 46]
const name = pair[z]

// falsy values: false, 0, '', null, undefined, NaN, -0, 0n
const zero = 0
const minusZero = -0
const bigZero = 0n

console.log(zero, minusZero, bigZero)
// console.log(zero + minusZero + bigZero)

const three = 3
const n = 1n + 2n + BigInt(three)

//
const nll = typeof null
console.log(nll);

var e: any = true;
console.log(e.substring(1, 2)); // run time error, because e is a boolean, not a string