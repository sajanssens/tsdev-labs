type Lang = 'nl' | 'en' | 'fr' | 'de';

export interface BankConfig {
    bankName: string;
    countryCode: string;
    bankCode: string;
    port: number;
    lang: Lang;
}

export const DEFAULT_BANK_CONFIG: Readonly<BankConfig> = Object.freeze({
    bankName: "Default Bank",
    countryCode: "N/A",
    bankCode: "0000",
    port: 8080,
    lang: "nl",
});