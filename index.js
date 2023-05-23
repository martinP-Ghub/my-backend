const express = require('express');
const app = express();
const port = 4000;
app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.url}`);
    next();
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.get('/error', (req, res) => {
    throw new Error('Test Error');
});


app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.get('/api', (req, res) => {
    res.send('Welcome to the API!');
});


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
