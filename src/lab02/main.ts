class HelloWorld {

    name: string;

    constructor(name: string) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, ${this.name}!`);
    }
}

const hello = new HelloWorld("World");
hello.greet();

const zero: 0 = 0
const pair: [string, number] = ['Bram', 46]
const name = pair[zero]