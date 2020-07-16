import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { request } from 'https';

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req: Request, res: Response): any => {
    let name: string = 'JD';
    res.send({
        message: 'lalala'
    })
    console.log(name);
})

app.listen(process.env.PORT || 3001, () => {
    console.log('You!');
})