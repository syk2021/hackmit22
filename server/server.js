const express = require('express');
require('dotenv').config();
import mongoose from 'mongoose';

const MONGO_URI = process.env;

mongoose.connect(MONGO_URI, { useNewURLParser: true }).then(() => {
    console.log('Connected to MongoDB');
}).catch(e => {
    console.error(e);
});

const app = express();

app.get('/', (req, res) => {
    res.send('Successful response.');
});

app.listen(3000, () => console.log('Example app is listening on 3000'))