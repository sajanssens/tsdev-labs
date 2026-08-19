# Review Questions - TypeScript Development - Day 2


1. What are the compile errors in this next example?

   ```ts
   interface Colored {
     color: string;
   }
   function printColor(thing: Colored) {
     console.log(thing.color);
   }
   const dice: Colored = { nrOfSides: 6, color: 'purple' }; // HERE
   printColor({ color: 'red', nrOfSides: 6 }); // HERE
   const dice2 = { color: 'blue', nrOfSides: 16 }; 
   printColor(dice2);
   ```

1. Help with creating a dictionary type in the next example: keys are strings, values are `CheckboxState` instances.

   ```ts
   interface CheckboxState {
     checked: boolean;
     cssClass?: string;
   }
   interface CheckboxStateByName {
     [name: string] : CheckboxState;
   }
   ```

1. Where are the compile errors here?\
   a. OK or compile error?\
   b. OK or compile error?\
   c. OK or compile error?\
   d. OK or compile error?

   ```ts
   abstract class Shape {
     color;
     constructor(color: string) {
       this.color = color;
     }
     abstract get area(): number;
   }
   class Circle extends Shape {
     constructor(
       protected radius: number,
       color: string,
     ) {
       super(color);
     }

     override get area(): number {
       return Math.PI * this.radius ** 2; // ** is exponentiation operator in JS
     }
   }
   const baseShape = new Shape('blue'); // a NOK, abstract
   const circle = new Circle(10, 'red'); // b OK
   console.log(`Circle radius: ${circle.radius}`); // c NOK, protected property
   console.log(`Circle color: ${circle.color}`); // d OK
   ```

1. What is printed here? `-10`
   ```ts
   class Point {
     constructor(
       readonly x: number,
       readonly y: number,
     ) {
       x = Math.abs(x);
       y = Math.abs(y);
     }
   }
   const p1 = new Point(-10, -20);
   console.log(p1.x);
   ```
1. The following will not compile under `--strict`. Can you explain the problem and introduce a fix? side is not nullable; either initialize it in the constructor or mark it as optional.
   ```ts
   class Square {
     side: number;
   }
   ```
1. What are the differences between `private` and ES `#private`? 
   - after compiling everything is `public`... except `#private`!
   - `private` is a TypeScript access modifier that restricts access to class members within the class itself. It is enforced at compile time, but the compiled JavaScript does not enforce this restriction, meaning that private members can still be accessed using bracket notation or other means.
   - `#private` is an ECMAScript feature that provides true privacy for class fields. It is enforced at runtime, and private fields cannot be accessed outside the class, even with bracket notation. This means that `#private` fields are truly private and cannot be accessed or modified from outside the class.

1. Circle the correct answers for a, b, c and d:\
   a. Compile error / runtime error / ok\
   b. Compile error / runtime error / ok\
   c. Compile error / runtime error / ok\
   d. Compile error / runtime error / ok

   ```ts
   class Calculator {
     constructor(public current = 0) {}
     add(n: number) {
       this.current += n;
     }
   }

   const calc = new Calculator();
   const add = calc.add;
   const add2 = (n: number) => calc.add(n);

   calc.add(42); // a OK
   add(42); // b RTE: Cannot read properties of undefined (reading 'current') because `this` is  (probably) undefined
   add2(42); // c OK
   add.call(calc, 42); // d OK
   ```

1. Fill in the `???` in the next example to make it compile and run:

   ```ts
   interface Concatable<T> { // <--
     concat(other: T): T;
   }
   
   function appender<T extends /*???*/ Concatable<T>>(current: T) { // of zoiets
     return {
       append(tail: T) {
         current = current.concat(tail);
       },
       current() {
         return current;
       },
     };
   }

   const stringBuilder = appender('Hello');
   stringBuilder.append(' ');
   stringBuilder.append('World');
   console.log(stringBuilder.current()); // Hello world

   const arrBuilder = appender([1]);
   arrBuilder.append([2, 3]);
   console.log(arrBuilder.current()); // [1, 2, 3]
   ```

1. Which statements about "modules" are true?\
   a. ✅ ES modules need "type" to be set to "module". (in `package.json` and/or `<script type="module">`) \
   b. When writing code that needs to run in the browser and nodejs, we use `"module": "preserve"`.\
   c. `"module": "preserve"` require you to write out `.js` extensions in your import specifiers.\
   d. ✅ `"module": "nodenext"` require you to write out `.js` extensions in your import specifiers.

1. For each import statement, specify if a compile error occurs. If not, what JS output is generated?

   ```json
   // tsconfig.json
   {
     "compilerOptions": {
       "module": "NodeNext",
       "verbatimModuleSyntax": true,
       "isolatedModules": true,
     },
   }
   ```

   ```ts
   // foo.ts
   export interface Foo {}
   export class Bar {}
   ```

   a. `import { Foo } from './foo.js'` NOK \
   b. `import type { Foo } from './foo.js'` OK but erased \
   c. `import { type Foo } from './foo.js'` OK \
   d. `import type { Bar } from './foo.js'` OK, but only use as type \
   e. `import { Bar, type Foo } from './foo.js'` OK but erased \
