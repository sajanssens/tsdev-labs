interface Person {
    name: string;
    age: number;
}

interface PersonDictionary {
    [_: string]: Person;
}

const people: PersonDictionary = {
    "saj": { name: "Bram", age: 46 },
    "nsj": { name: "Niek", age: 13 }
};

console.log(people["saj"]);
console.log(people.nsj);