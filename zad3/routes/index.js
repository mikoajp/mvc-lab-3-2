const homePage = require('../views/home');
const studentPage = require('../views/student');

exports.handleHome = (req, res) => {
    res.send(homePage.renderPage());
};

exports.handleStudent = (req, res) => {
    if (req.method === 'POST') {
        return res.redirect('/student');
    }
    res.send(studentPage.renderPage());
};
