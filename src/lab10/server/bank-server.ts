import express, {type Response} from 'express';
import type {Bank} from './bank.ts';


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
