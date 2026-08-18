class Iban {
    countryCode: string;
    bankCode: string;
    accountNumber: string;
    controlNumber: string;

    constructor(countryCode: string, bankCode: string) {
        this.countryCode = countryCode;
        this.bankCode = bankCode;
        this.accountNumber = Math.floor(Math.random() * 10000000000).toString().padStart(10, "0");
        this.controlNumber = this.generateControlNumber();
    }

    generateControlNumber() {
        return '00';
    }
}

class Customer {
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
}

class BankAccount {
    iban: Iban;
    customer: Customer;

    constructor(customer: Customer, iban: Iban) {
        this.iban = iban;
        this.customer = customer;
    }

    toString() {
        return `Customer: ${formatName(this.customer)}, IBAN: ${formatIban(this.iban)}`;
    }
}

interface BankConfig {
    bankName: string;
    countryCode: string;
    bankCode: string;
}

class Bank {
    readonly config: BankConfig;
    readonly #accounts: BankAccount[] = [];

    constructor(config: BankConfig) {
        this.config = config;
    }

    createAccount(customer: Customer): BankAccount {
        const iban = new Iban(this.config.countryCode, this.config.bankCode);
        const account = new BankAccount(customer, iban);
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

function formatName(c: Customer): string {
    const {firstName, lastName, insertion} = c;
    if (insertion) {
        return `${firstName} ${insertion} ${lastName}`;
    } else {
        return `${firstName} ${lastName}`;
    }
}

function formatIban(iban: Iban) {
    let a = iban.accountNumber;
    return `${iban.countryCode}${iban.controlNumber} ${iban.bankCode} ${a.substring(0, 4)} ${a.substring(4, 8)} ${a.substring(8, 12)}`;
}

const bank = new Bank({bankCode: 'RABO', countryCode: 'NL', bankName: 'Rabobank Leusden'});

bank.createAccount(new Customer('Alfred', 'Kwak', 'Jodocus'));
bank.createAccount(new Customer('Donald', 'Duck'));
bank.createAccount(new Customer('Mickey', 'Mouse'));

bank.printAccounts();