# Review Questions - TypeScript Development - Day 1

1. TypeScript is actually 4 things, what are they?
    1. language extension
    2. type checker (`--noEmit`)
    3. transpiler (`--noCheck`)
    4. ... ❌ language server (LSP)
1. Write down the inferred types of the variables in this example:
   ```ts
   let jedi = 'Yoda'; // string
   const han = 'Han'; // 'Han'
   const nrs = [1, 2, 3]; // Array<Number> or number[]
   const stuff = [1, '2']; // [number, string] ❌ its (string | number)[] 
   ```
1. What is not a 'type' in JavaScript (cannot be returned from the `typeof` operator):\
   a. `'string'`\
   b. `'null'`\ <-- ❌ too, `typeof null === 'object'`
   c. `'undefined'`\
   d. `'bigint'` \
   e. `'any'` <--
1. Type narrowing. Add type narrowing syntax to make the code example compile.
   ```ts
   /**
    * Round `n` to a fraction with 2 digits. If already a string, return that string.
    */
   function round(n: string | number): string {
     if(typeof n === 'string') n = Number(n)
     return n.toFixed(2);
   }
   ```
1. Explain why `"strict"` is important to enable. What exactly changes when it is enabled?  
    - in JS `"use strict"`: 
      - Using a variable, without declaring it, is not allowed; `this` doesn't point to global object
    - in TS, strict options in tsconfig.json:
      - `strict: true` means "all strict options are true", like
      - no implicit any
      - strict null checks
      - ...


1. Create your own "enum" using a union of string literals in the next example.

   ```ts
   type BloodType = 'A' | 'B' | 'AB' | '0'
   let blood: BloodType = 'A';
   blood = 'B';
   blood = 'AB';
   blood = '0';
   ```

1. What is logged in this example? 

   ```ts
   var a = 0;
   function example() {
     // var a: number; // gets hoisted here
     using b = createLog();
     const nrs = [1, 2];
     for (const n of nrs) {
       var a = n; // hoisted to (i.e. declared at) function scope
       setTimeout(() => console.log(`${a}${n}`));
     }
   }
   function createLog() {
     return {
       [Symbol.dispose]() {
         console.log(`${a}${3}`);
       },
     };
   }
   example();
   ```

    ```console
    23 ❌ 03, want 
    21
    22
    ```

1. What is logged in this example?

   ```ts
   const list = [1, 2, 3];
   const [a, ...nrs] = list;
   const [, b] = nrs;
   console.log(b);

   const hanSolo = { firstName: 'Han', lastName: 'Solo', age: 68 };
   const { firstName, ...rest } = hanSolo;
   console.log(rest);
   ```

   ```
   3
   { lastName: 'Solo', age: 68 }
   ```

1. Wat is logged in this example?

   ```ts
   const person = { name: 'Baby John', age: 0 };
   console.log(person.age ?? -1);
   console.log(person.age || -1);
   ```

    ```
    0
    -1  
    ```

1. What are the compile errors in this next example?

   ```ts
   interface Colored {
     color: string;
   }
   function printColor(thing: Colored) {
     console.log(thing.color);
   }
   printColor({ color: 'blue' });
   printColor({ color: 42 }); // <-- number !== string
   const dice2 = { color: 'blue', nrOfSides: 16 };
   printColor(dice2);
   const options = {};  // type is '{}'
   options.file = 'abc.js'; // ❌: you cannot change the type (in TS), in JS it would be fine
   ```
