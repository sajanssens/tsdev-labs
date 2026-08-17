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