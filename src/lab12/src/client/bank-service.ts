import {BankAccount, type BankConfig} from "../shared/index.ts";

export const bankService = {
    retrieveBank: () => {
        return fetch('/api/bank').then(
            (response) => response.json() as Promise<BankConfig>,
        );
    },

    async retrieveAccounts(): Promise<BankAccount[]> {
        let response = await fetch('/api/bank/accounts');
        let accounts = await response.json();
        return accounts.map((account: BankAccount) =>
            BankAccount.fromJson(account)
        )
    }
};
