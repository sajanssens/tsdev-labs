import {bankService} from "./bank-service.ts";
import './bank-accounts-table-component.ts';

// bankService.retrieveBank().then((bankConfig) => {
//     console.log('Retrieved bank config:', bankConfig);
//     document.querySelector('h1')!.textContent = `Bank: ${bankConfig.bankName}`;
// });

// with await:
const bankConfig = await bankService.retrieveBank();
console.log('Retrieved bank config:', bankConfig);
document.querySelector('h1')!.textContent = `Bank: ${bankConfig.bankName}`;


let bankAccounts = await bankService.retrieveAccounts();
const bankAccountsTable = document.querySelector('bank-accounts-table')!;
bankAccountsTable.accounts = bankAccounts;

console.log('End');
