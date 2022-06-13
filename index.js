import express from "express";

import bodyParser from 'body-parser';


import userRoute from './Route/user.js'

const app = express();
const Port = 500;

app.use(bodyParser.json());


app.use('/users', userRoute);




app.listen(Port, () => console.log(`My first API : http://localhost:${Port}`));