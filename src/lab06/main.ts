const DEFAULT_COUNTRY_CODE = "NL";
const DEFAULT_BANK_CODE = "TYPE";

interface Iban {
    countryCode: string;
    bankCode: string;
    accountNumber: string;
    controlNumber: string;
}

interface Customer {
    firstName: string;
    lastName: string;
    insertion?: string;
}

interface BankAccount {
    iban: Iban;
    customer: Customer;
    toString(): string
}

function formatName(c: Customer): string {
    const {firstName, lastName, insertion} = c;
    if (insertion) {
        return `${firstName} ${insertion} ${lastName}`;
    } else {
        return `${firstName} ${lastName}`;
    }
}

function generateIban(bankCode?: string, countryCode?: string): Iban {
    const cc = countryCode ?? DEFAULT_COUNTRY_CODE;
    const bc = bankCode ?? DEFAULT_BANK_CODE;
    const an = Math.floor(Math.random() * 10000000000).toString().padStart(10, "0");
    const cn = generateControlNumber(cc, bc, an);
    return {
        countryCode: cc,
        bankCode: bc,
        accountNumber: an,
        controlNumber: cn
    };
}

function generateControlNumber(cc: string, bc: string, an: string) {
    return '00';
}

function formatIban(iban: Iban) {
    let a = iban.accountNumber;
    return `${iban.countryCode}${iban.controlNumber} ${iban.bankCode} ${a.substring(0, 4)} ${a.substring(4, 8)} ${a.substring(8, 12)}`;
}

function createBankAccount(customer: Customer, iban?: Iban): BankAccount {
    return {
        iban: iban ?? generateIban(),
        customer, // short-hand for `customer: customer`
        toString() {
            return `Customer: ${formatName(this.customer)}, IBAN: ${formatIban(this.iban)}`;
        }
    }
}

const bankAccounts = [
    createBankAccount({firstName: 'Alfred', lastName: 'Kwak', insertion: 'Jodocus'}, generateIban()),
    createBankAccount({firstName: 'Donald', lastName: 'Duck'}, generateIban('INGB', 'NL')),
    createBankAccount({firstName: 'Mickey', lastName: 'Mouse'}, generateIban('DEUT', 'DE'))
];

bankAccounts.forEach(a => console.log(a.toString()));

