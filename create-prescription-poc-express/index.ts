import {PrescriberTableEntry} from "./interfaces/prescriberTable";

const express = require('express');
const dotenv = require('dotenv');
let cors = require('cors');
let fs = require('fs');

const app = express();
const port = process.env.PORT;

let sample_DB_file = './testData/prescriberData.json';

app.use(cors());
app.use(express.json());

app.get('/getPrescribers', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let prescriberData = JSON.parse(fs.readFileSync(sample_DB_file, 'utf8')) as PrescriberTableEntry[];
    res.send(JSON.stringify(prescriberData));
});

app.post('/addPrescriber', (req, res) => {
    let prescriberData = JSON.parse(fs.readFileSync(sample_DB_file, 'utf8')) as PrescriberTableEntry[];
    prescriberData.push(req.body as  PrescriberTableEntry);
    fs.writeFileSync(sample_DB_file, JSON.stringify(prescriberData));
    res.send(JSON.stringify(prescriberData));

});

app.listen(4000, () => {
    console.log('Server listening on port 4000');
});