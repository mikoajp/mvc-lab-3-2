exports.renderPage = (studentData) => {
    if (!studentData) {
        return 'Brak danych studenta.';
    }

    const { code, name, lastname, gender, age, studyField } = studentData;
    return `
        <!DOCTYPE html>
        <html lang="pl">
        <head>
            <meta charset="UTF-8">
            <title>Profil Studenta</title>
        </head>
        <body>
            <h1>Student profile</h1>
            <p>Numer albumu: ${code}</p>
            <p>Imię: ${name}</p>
            <p>Nazwisko: ${lastname}</p>
            <p>Płeć: ${gender}</p>
            <p>Wiek: ${age}</p>
            <p>Kierunek: ${studyField}</p>
        </body>
        </html>
    `;
};
