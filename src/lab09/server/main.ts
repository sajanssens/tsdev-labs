import {Bank} from './bank.ts';
import {Customer} from '../shared/customer.ts';

const bank = new Bank({bankCode: 'RABO', countryCode: 'NL', bankName: 'Rabobank Leusden'});

bank.createAccount(new Customer('Alfred', 'Kwak', 'Jodocus'));
bank.createAccount(new Customer('Donald', 'Duck'));
bank.createAccount(new Customer('Mickey', 'Mouse'));

bank.printAccounts();