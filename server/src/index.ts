import express from 'express';
import { request } from 'https';

const app = express();

app.get('/', (req: any) => {
    req.name = 'John';
    console.log(req.name);
})

app.listen(3001, () => {
    console.log('You!');
})