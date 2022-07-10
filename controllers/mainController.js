const controller =  {
    index: (req, res) => {
        res.render('index')
    },

    register: (req, res) => {
        res.render('register')
    },

    login: (req, res) => {
        res.render('login')
    },

    productsAlfajores: (req, res) => {
        res.render('productsAlfajores')
    },

    productsEmpanadas: (req, res) => {
        res.render('productsEmpanadas')
    },

    productsMates: (req, res) => {
        res.render ('productsMates')
    }
}

module.exports = controller;