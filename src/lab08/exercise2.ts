function callNonGeneric(fn: any, ...args: any[]): any {
    return fn(...args);
}

// hier is `any` wat in kotlin `*` is?
function call<F extends (...args: any[]) => R, R>(fn: F, ...args: Parameters<F>): R {
    return fn(...args);
}

function increment(n: number) {
    return ++n;
}

call(console.log, 'test', '123');
const n = call(increment, 41);

// console.log(call(increment, '42')); // => ERROR!
// const str: string = call(increment, 42); // => ERROR!

// ... whilst this was allowed with the non-generic version, but it is not type safe!:
console.log(callNonGeneric(increment, '42'));
const str: string = callNonGeneric(increment, 42);
