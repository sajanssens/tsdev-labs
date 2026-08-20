import express from 'express';
import type {Bank} from './bank.ts';
import {fileURLToPath} from 'url';
import {Customer} from '../shared/customer.ts';

export class BankServer {

    private app: express.Express;
    private bank: Bank;

    constructor(bank: Bank) {
        this.app = express();
        this.bank = bank;
        this.setup();
    }

    private setup() {
        this.app.use(express.static(resolve('static')));
        this.app.use(express.static(resolve('dist')));
        this.app.use('/src', express.static(resolve('src')));
        this.app.use('/node_modules', express.static(resolve('node_modules')));

        this.app.get(`/api/bank/`, (_, res) => {
            console.log(`get /api/bank/`);
            res.json(this.bank.config);
        });

        this.app.get(`/api/bank/accounts`, (_, res) => {
            console.log(`get /api/bank/accounts`);
            res.json(this.bank.accounts);
        });

        this.app.post(`/api/bank/customers`, (rq, resp) => {
            console.log(`get /api/bank/account`);
            const maybeCustomer: unknown = rq.body;
            if (this.isValid(maybeCustomer)) {
                this.bank.createAccount(
                    new Customer(
                        maybeCustomer.firstName,
                        maybeCustomer.lastName,
                        maybeCustomer.insertion,
                    ),
                );
                resp.status(204);
                resp.end();
            } else {
                resp.status(422);
                resp.end('Customer entity invalid');
            }
        });
    }

    listen(port: number) {
        this.app.listen(port);
        console.log(`Bank ${this.bank.config.bankName} listening on port ${this.bank.config.port}`,);
    }

    private isValid(c: unknown): c is Customer {
        return Boolean(c &&
            typeof c === 'object' &&
            'firstName' in c && typeof c.firstName === 'string' &&
            'lastName' in c && typeof c.lastName === 'string' &&
            (!('insertion' in c) || typeof c.insertion === 'string')
        );
    }
}

let x = 4

const resolve = (relativePath: string) => fileURLToPath(new URL(`../../${relativePath}`, import.meta.url));