const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get('/rota1', (req, res) => {
    res.send('<a href="/rota2">Ir para Rota 2</a>');
})

app.get('/rota2', (req, res) => {
    res.send('<a href="/rota1">Ir para Rota 1</a>');
})

app.get('/invert', (req, res) => {
    const texto = req.query.texto;
    if (!texto) {
        res.status(400).send('Por favor, forneça um texto para inverter.');
    } else {
        const textoInvertido = texto.split('').reverse().join('');
        res.send(`Texto invertido: ${textoInvertido}`);
    }
})

app.post('/login', (req, res) => {
    const { usuario, senha } = req.body;
    if (!usuario || !senha) {
        res.status(400).send('Por favor, forneça usuário e senha.');
    } else if (senha === usuario.repeat(2)) {
        res.send('Acesso permitido');
    } else {
        res.send('Acesso negado');
    }
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});