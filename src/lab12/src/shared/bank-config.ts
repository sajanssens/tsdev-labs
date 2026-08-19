type Lang = 'nl' | 'en' | 'fr';

export interface BankConfig {
    bankName: string;
    countryCode: string;
    bankCode: string;
    port: number;
    lang: Lang;
}