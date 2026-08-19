import express, {type Response} from 'express';
import type {Bank} from './bank.ts';
import {fileURLToPath} from 'url';

export class BankServer {

    private app: express.Express;
    private bank: Bank;

    constructor(bank: Bank) {
        this.app = express();
        this.bank = bank;
    }

    listen(port: number) {
        this.app.listen(port);
        console.log(`Bank ${this.bank.config.bankName} listening on port ${this.bank.config.port}`,);

        this.app.use(express.static(resolve('static')));
        this.app.use(express.static(resolve('dist')));
        this.app.use('/src', express.static(resolve('src')));

        this.app.get(`/api/bank/`, (_, res: Response) => {
            console.log(`get /api/bank/`);
            res.json(this.bank.config);
        });

        this.app.get(`/api/bank/accounts`, (_, res: Response) => {
            console.log(`get /api/bank/accounts`);
            res.json(this.bank.accounts);
        });
    }
}

const resolve = (relativePath: string) =>
    fileURLToPath(new URL(`../../${relativePath}`, import.meta.url));