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


async function list(req, res) {
    const users = await CustomersModel.find()

    res.render('list', {
        title: 'Lista de usuarios',
        users,
    })
}

async function formEdit(req, res) {
    const { id } = req.query

    const user = await CustomersModel.findById(id)

    res.render('edit', {
        title: 'Editar Usuário',
        user,
        message: 'Alteração realizada com sucesso',
    })
}

async function edit(req, res) {
    const {
        name,
        age,
        email,
    } = req.body

    const { id } = req.params

    const user = await CustomersModel.findById(id)

        user.name = name
        user.age = age
        user.email = email

        user.save()
}

async function remove(req, res) {
    const { id } = req.params

    const remove = await CustomersModel.deleteOne({ _id: id})

    if (remove.ok) {
        res.redirect('/list')    
    }
}

module.exports = {
    index,
    add,
    list,
    formEdit,
    edit,
    remove,
}