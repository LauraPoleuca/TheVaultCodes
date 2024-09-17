const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const puzzles = [
    { id: 1, hint: 'A fruit that keeps the doctor away', word: 'apple' },
    { id: 2, hint: 'A yellow fruit that monkeys love', word: 'banana' },
];

app.get('/puzzle', (req, res) => {
    res.json(puzzles);
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});