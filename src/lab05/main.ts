function formatName(
    firstName: string,
    lastName: string,
    insertion?: string,
): string {
    if (insertion) {
        return `${firstName} ${insertion} ${lastName}`;
    } else {
        return `${firstName} ${lastName}`;
    }
}

if (formatName('Pascalle', 'Vries', 'de') !== 'Pascalle de Vries') {
    throw new Error('formatName does not work correctly');
} else {
    console.log('formatName works correctly');
}

if (formatName('Pascalle', 'Vries') !== 'Pascalle Vries') {
    throw new Error('formatName does not work correctly');
} else {
    console.log('formatName works correctly');
}

const DEFAULT_COUNTRY_CODE = "NL";
const DEFAULT_BANK_CODE = "TYPE";

function generateControlNumber(cc: string, bc: string, an: string) {
    return '00';
}

function generateIban(bankCode?: string, countryCode?: string) {
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

console.log(generateIban('ABNA', 'NL'));

function formatIban(iban: { countryCode: string, bankCode: string, accountNumber: string, controlNumber: string }) {
    let a = iban.accountNumber;
    return `${iban.countryCode}${iban.controlNumber}  ${iban.bankCode} ${a.substring(0, 4)} ${a.substring(4, 8)} ${a.substring(8, 12)}`;
}

const ibanTypedBank = generateIban();
const ibanIng = generateIban('INGB', 'NL');
const ibanDeutscheBank = generateIban('DEUT', 'DE');
console.log(formatIban(ibanTypedBank));
console.log(formatIban(ibanIng));
console.log(formatIban(ibanDeutscheBank));
