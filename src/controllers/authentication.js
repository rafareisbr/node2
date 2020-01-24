exports.getLogin = (req, res) => {
    res.render('authentication/login', {
        pageTitle: ''
    })
}

exports.postLogin = (req, res) => {}

exports.postLogout = (req, res) => {}

exports.getRegister = (req, res) => {
    res.render('authentication/register', {
        pageTitle: ''
    })
}

exports.postRegister = (req, res) => {}
