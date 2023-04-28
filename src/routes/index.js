const router = require('express').Router()

// rotas

    router.get('/', (req, res) => {
        res.render('index', {
        title: 'Titulo teste' 
        })
    })
    

module.exports = router
