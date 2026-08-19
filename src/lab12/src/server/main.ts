import {Bank} from './bank.ts';
import {Customer} from '../shared/customer.ts';
import {BankServer} from "./bank-server.ts";

const bank = new Bank({bankCode: 'RABO', countryCode: 'NL', bankName: 'Rabobank Leusden', port: 8080, lang: 'nl'});

bank.createAccount(new Customer('Alfred', 'Kwak', 'Jodocus'));
bank.createAccount(new Customer('Donald', 'Duck'));
bank.createAccount(new Customer('Mickey', 'Mouse'));

bank.printAccounts();

const server = new BankServer(bank);
server.listen(bank.config.port);