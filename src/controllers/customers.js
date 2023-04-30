const CustomersModel = require('../models/customers')
const { crypto } = require('../utils/password')

const defaultTitle = 'Registro de Clientes'

function index(req, res) {
    res.render('register', {
    title: 'Registo de Clientes' 
    })
}

async function add(req, res) {
   const {
    name,
    age,
    email,
    password,
   } = req.body

   const passwordCrypto = await crypto(password)

   const register = new CustomersModel({
    name,
    age,
    email,
    password: passwordCrypto,
   })

    register.save()
    res.render('register', {
        title: defaultTitle,
        message: 'Registro realizado com sucesso!'    
    })
}


async function listUsers(req, res) {
    const users = await CustomersModel.find()

    res.render('listUsers', {
        title: 'Lista de usuarios',
        users,
    })
}

module.exports = {
    index,
    add,
    listUsers,
}