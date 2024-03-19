const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

const { handleHome, handleStudent } = require('./routes/index');

app.get('/', handleHome);
app.post('/student', handleStudent);

app.use((req, res) => {
    res.status(404).contentType('text/html').send('404 Not Found');
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
