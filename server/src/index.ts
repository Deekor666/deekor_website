require('dotenv').config();
import express, {Application, Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import connect from './connect';
//import {fileURLToPath} from "url";
//import {watchFile} from "fs";

const app: Application = express();
const host: string = process.env.HOST || 'localhost';
const port: number = Number(process.env.PORT) || 3000;
const user: string = process.env.DB_USERNAME || 'user';
const password: string = process.env.DB_PASSWORD || 'password';
const dbName: string = process.env.DB_NAME || 'dbname';
console.log(` ${typeof process.env.PORT} user: ${user}, password: ${password}, dbName: ${dbName}, port: ${port}`);
const db: string = `mongodb+srv://${user}:${password}@cluster0.u1rt9.azure.mongodb.net/${dbName}?retryWrites=true&w=majority`

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req: Request, res: Response): any => {
    let name: string = 'JD';
    res.send({
        message: 'lalala',
        name
    });
    console.log(name);
});
app.get('/all', (req: Request, res: Response, next: NextFunction): any => {
    res.send({
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

connect(db); 

app.listen(port, host, () => {
    console.log(`port: ${port}, host: ${host}`);
});
