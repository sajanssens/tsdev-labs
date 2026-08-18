x = 3; // oeps...
var x = 4;
var x = 4; // oeps...

// y = 3; // oeps... cannot access 'y' before initialization
let y = 3;
// let y = 4; // oeps... cannot redeclare block-scoped variable 'y'

function a() {
    for (var i = 0; i < 10; i++) {
        // do something
    }
    console.log(i); // still available here, because var is function-scoped, e.g. hoisted to the top of the function
}

function b() {
    for (let i = 0; i < 10; i++) {
        // do something
    }
    // console.log(i); // NOT available here, because let is block-scoped
}

function createLogger() {

    let count = 0;

    return {
        log(msg: string) {
            console.log(`[${new Date().toISOString()}] ${msg}`);
            count++;
        },

        [Symbol.dispose]() {
            console.log(`Logger disposed after ${count} messages`);
        }
    }
}

function demo() {
    using logger = createLogger()
    logger.log("Hello, world!");
    logger.log("Hello, world!");
    logger.log("Hello, world!");
    logger.log("Hello, world!");

    if (1) {
        using logger2 = createLogger()
        logger2.log("Hello, world 2!");
        logger2.log("Hello, world 2!");
    } // logger2.dispose() is automatically called here, when the variable goes out of scope

    console.log("Back in the outer scope");

} // logger.dispose() is automatically called here, when the variable goes out of scope

demo();