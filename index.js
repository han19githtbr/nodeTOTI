const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req,res) => {
    console.log('Requisição GET foi chamado')
    res.send('Olá mundo!')
})
app.get('/help', (req,res) => {
    console.log('Rota de ajuda foi chamada')
    res.send('Help please!')
})
app.get('/:id', (req,res) => {
    const id = req.params.id
    res.send(`usuário digitou o ID: ${id}`)
})
const verificaIdade = (req, res, next) => {
    const idade = req.body.idade;
    if (idade < 16) {         
        res.json({ error: "Você ainda não tem idade para tirar o título de eleitor! "})          
    } else {
        next()         
    }
}

app.post("/", verificaIdade, (req, res) =>  {
    res.send("Bem-vindo ao portal do Tribunal Superior Eleitoral")

})

app.listen(3000)
