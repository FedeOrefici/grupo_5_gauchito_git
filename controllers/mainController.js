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
    },

    panelAdministrator: (req, res) => {
        res.render ('panelAdministrator')
    },

    loginAdmin: (req, res) => {
        res.render ('loginAdmin')
    },

    panelAdminEmp: (req, res) => {
        res.render ('panelAdminEmp')
    },

    panelAdminAlf: (req, res) => {
        res.render ('panelAdminAlf')
    },

    panelAdminMat: (req, res) => {
        res.render ('panelAdminMat')
    },

    panelAdminModif: (req, res) => {
        res.render ('panelAdminModif')
    }
}

module.exports = controller;