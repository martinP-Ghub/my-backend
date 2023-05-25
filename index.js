const express = require('express');
const cors = require('cors');
const routeLogin = require('./routes/login-route');

const app = express();
const port = 4000;


app.use(cors());
app.use(express.json());

app.use("/api/loginInfo", routeLogin);

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

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
