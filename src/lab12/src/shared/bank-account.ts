import {Customer} from "./customer.ts";
import {Iban} from "./iban.ts";

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

    static fromJson(bankAccount: BankAccount): BankAccount {
        return new BankAccount(
            Customer.fromJson(bankAccount.customer),
            Iban.fromJson(bankAccount.iban),
        );
    }
}
