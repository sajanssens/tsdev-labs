import {BankAccount, type BankConfig, Customer, Iban} from '../shared/index.ts';
import {auditLog} from './audit-log.ts';

export class Bank {
    readonly config: BankConfig;
    readonly #accounts: BankAccount[] = [];

    constructor(config: BankConfig) {
        this.config = config;
    }

    createAccount(customer: Customer): BankAccount {
        const iban = new Iban(this.config.countryCode, this.config.bankCode);
        auditLog(iban, 'created');
        const account = new BankAccount(customer, iban);
        auditLog(customer, 'assigned to account');
        this.#accounts.push(account);
        console.log(`[${this.config.bankName}] welcomes ${account}`);
        return account;
    }

    printAccounts() {
        console.log(`Accounts of ${this.config.bankName}:`);
        for (const account of this.#accounts) {
            console.log(`- ${account}`);
        }
    }


    get accounts(): BankAccount[] {
        return this.#accounts;
    }
}