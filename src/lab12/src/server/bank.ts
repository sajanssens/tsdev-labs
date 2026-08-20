import {BankAccount, type BankConfig, Customer, Iban} from '../shared/index.ts';
import {auditLog} from './audit-log.ts';
import {DEFAULT_BANK_CONFIG} from "../shared/bank-config.ts";

export class Bank {
    readonly config: BankConfig;
    readonly #accounts: BankAccount[] = [];

    constructor(config: Partial<BankConfig>) {
        this.config = Object.freeze({ ...DEFAULT_BANK_CONFIG, ...config });
    }

    createAccount(customer: Customer): BankAccount {
        const iban = new Iban(this.config.countryCode, this.config.bankCode);
        auditLog(iban, 'created');
        const account = new BankAccount(customer, iban);
        auditLog(customer, 'assigned to account');
        this.#accounts.push(account);
        let welcomes = translate(this.config);
        console.log(`[${this.config.bankName}] ${welcomes} ${account}`);

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

function handleUnknownLanguage(lang: string): never {
    throw new Error(`${lang} is not a valid language`);
}

function translate(config: BankConfig): string {
    switch (config.lang) {
        case 'en':
            return 'welcomes';
        case 'fr':
            return 'accueille';
        case 'nl':
            return 'verwelkomt';
        case 'de':
            return 'begrüßt';
        default:
            handleUnknownLanguage(config.lang satisfies never);
    }
}