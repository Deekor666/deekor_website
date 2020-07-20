import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
//import {fileURLToPath} from "url";
//import {watchFile} from "fs";

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req: Request, res: Response): any => {
    let name: string = 'JD';
    res.send({
        message: 'lalala'
    });
    console.log(name);
});
app.get('/all', (req: Request, res: Response): any => {
    res.json({
        "index": 1,
        "_id": "5e363b135036a835ac1a7da8",
        "title": "Js Tut#",
        "description": "Description for Tut#",
        "published": true,
        "createdAt": "2020-02-02T02:59:31.198Z",
        "updatedAt": "2020-02-02T02:59:31.198Z",
        "__v": 0
    })
});

app.listen(process.env.PORT || 3001, () => {
    console.log('You!');
});