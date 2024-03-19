const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, '..', 'data');
const homePage = require('../views/home');
const studentPage = require('../views/student');

exports.handleHome = (req, res) => {
    res.send(homePage.renderPage());
};

if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
}

exports.handleStudent = (req, res) => {
    const { name, lastname, age, gender, code, studyField } = req.body;
    const filePath = path.join(__dirname, '..', 'data', `${code}.txt`);
    const studentData = `Numer albumu: ${code}\nImię: ${name}\nNazwisko: ${lastname}\nPłeć: ${gender}\nWiek: ${age}\nKierunek: ${studyField}`;

    fs.writeFile(filePath, studentData, (err) => {
        if (err) {
            console.error(err); // Wypisuje błąd do konsoli
            return res.status(500).send("Nie udało się zapisać danych studenta.");
        }
        res.send(studentPage.renderPage({ name, lastname, age, gender, code, studyField }));
    });
};

