const express = require('express')
const path = require('path')
const database = require('./database')

const app = express()


// conexão com o banco de dados
database.connect()


// definindo o template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// definindo os arquivos públicos
app.use(express.static(path.join(__dirname, 'public')))

// habilita server para receber dados via post (formulário)
app.use(express.urlencoded({ extended: true }))

// definindo as rotas
app.get('/', (req, res) => {
    res.render('index', {
       title: 'Titulo teste' 
    })
})

// 404 error (not found)
app.use((req, res) => { // middleware
  res.send('Página não encontrada!')
})

// executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))