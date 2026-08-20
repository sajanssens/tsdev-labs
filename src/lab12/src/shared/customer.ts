export class Customer {
    firstName: string;
    lastName: string;
    insertion?: string;

    constructor(firstName: string, lastName: string, insertion?: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        if (insertion) {
            this.insertion = insertion;
        }
    }

    format() {
        if (this.insertion) {
            return `${this.firstName} ${this.insertion} ${this.lastName}`;
        } else {
            return `${this.firstName} ${this.lastName}`;
        }
    }

    toString() {
        return this.format();
    }

    static fromJson(customerJson: Customer) {
        return new Customer(
            customerJson.firstName,
            customerJson.lastName,
            customerJson.insertion,
        );
    }
}