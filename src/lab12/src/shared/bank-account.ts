import type { Customer } from "./customer.ts";
import type { Iban } from "./iban.ts";

export class BankAccount {
    iban: Iban;
    customer: Customer;

    constructor(customer: Customer, iban: Iban) {
        this.iban = iban;
        this.customer = customer;
    }

    format() {
        return `Customer: ${this.customer.format()}, IBAN: ${this.iban.format()}`;
    }

    toString() {
        return this.format();
    }
}
