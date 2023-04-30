const router = require('express').Router()

const IndexController = require('../controllers/index')
const CustomersController = require('../controllers/customers')

// rotas
router.get('/', IndexController.index) 
    
// registro
router.get('/register', CustomersController.index)
router.post('/register/add', CustomersController.add)

// listar
router.get('/list', CustomersController.listUsers)


module.exports = router
