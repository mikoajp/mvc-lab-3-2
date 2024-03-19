const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(require('./views/home').renderPage());
});

app.get('/student', (req, res) => {
    res.send(require('./views/student').renderPage());
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});