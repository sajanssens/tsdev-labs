// import { Foo } from './foo.js'
// import type { Foo } from './foo.js'
// import { type Foo } from './foo.js'
// import type { Bar } from './foo.js'
import { Bar, type Foo } from './foo.js'

const foo: Foo = new Bar()
const bar = new Bar()