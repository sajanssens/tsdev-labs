export class Iban {
    countryCode: string;
    bankCode: string;
    accountNumber: string;
    controlNumber: string;

    constructor(countryCode: string, bankCode: string, accountNumber?: string, controlNumber?: string) {
        this.countryCode = countryCode;
        this.bankCode = bankCode;
        this.accountNumber = Math.floor(Math.random() * 10000000000).toString().padStart(10, "0");
        this.controlNumber = this.generateControlNumber();
    }

    generateControlNumber() {
        let mod97 = BigInt(toAlphabetNumbers(this.bankCode) + this.accountNumber + toAlphabetNumbers(this.countryCode) + '00') % 97n;
        return (98n - mod97).toString().padStart(2, '0');
    }

    format() {
        return `${this.countryCode}${this.controlNumber} ${this.bankCode} ${this.accountNumber.substring(0, 4)} ${this.accountNumber.substring(4, 8)} ${this.accountNumber.substring(8, 12)}`;
    }

    static fromJson(iban: Iban): Iban {
        return new Iban(
            iban.countryCode,
            iban.bankCode,
            iban.accountNumber,
            iban.controlNumber,
        );
    }
}

function toAlphabetNumbers(word: string) {
    let result = '';
    word.split('').forEach(char => {
        result += (char.charCodeAt(0) - 64).toString();
    });
    return result;
}