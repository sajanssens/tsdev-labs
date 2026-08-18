function namedParams({name, age}: any) {
    console.log(name, age);
}

namedParams({name: "Bram", age: 42});
namedParams({age: 13, name: "Niek"});

// {...} is an object
// [...] is an array or tuple

const han = Math.random() > .5 ? {
    shootFirst() {
        console.log('ja')
    }
} : {};
han.shootFirst?.(); // alleen uitvoeren als shootFirst bestaat, anders niets doen; dit kan best in de JavaScript wereld, maar in C# zou dit een compile error zijn, omdat shootFirst niet bestaat op het type van han