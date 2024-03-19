exports.renderPage = () => {
    return `
        <!DOCTYPE html>
        <html lang="pl">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Formularz studenta</title>
        </head>
        <body>
            <form>
                <div>
                    <label for="name">Imię:</label>
                    <input type="text" id="name" name="name">
                </div>
                <div>
                    <label for="lastname">Nazwisko:</label>
                    <input type="text" id="lastname" name="lastname">
                </div>
                <div>
                    <label for="age">Wiek:</label>
                    <input type="number" id="age" name="age">
                </div>
                <div>
                    <label for="gender">Płeć:</label>
                    <select id="gender" name="gender">
                        <option value="male">Mężczyzna</option>
                        <option value="female">Kobieta</option>
                        <option value="other">Inna</option>
                    </select>
                </div>
                <div>
                    <label for="code">Numer albumu:</label>
                    <input type="number" id="code" name="code">
                </div>
                <div>
                    <label for="studyField">Kierunek:</label>
                    <input type="text" id="studyField" name="studyField">
                </div>
                <button type="submit">Wyślij</button>
            </form>
        </body>
        </html>
    `;
};
