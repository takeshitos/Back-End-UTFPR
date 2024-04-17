const express = require('express');
const mustacheExpress = require('mustache-express');
const cookieSession = require('cookie-session');

const app = express();
const PORT = process.env.PORT || 3000;

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(cookieSession({
    name: 'session',
    keys: ['chave_super_secreta'], 
    maxAge: 24 * 60 * 60 * 1000, 
}))

app.use(express.urlencoded({ extended: true }));

let globalCounter = 0;

app.get('/', (req, res) => {
    const userName = req.session.userName || '';
    res.render('index', { userName });
})

app.post('/salvauser', (req, res) => {
    req.session.userName = req.body.userName;
    res.redirect('/');
})


app.get('/random', (req, res) => {
    let randomNumber;
    if (req.session.randomNumber) {
        randomNumber = req.session.randomNumber;
    } else {
        randomNumber = Math.floor(Math.random() * 100);
        req.session.randomNumber = randomNumber;
    }
    res.send(`Número aleatório: ${randomNumber}`);
})

app.get('/contador', (req, res) => {
    globalCounter += 1;
    req.session.userCounter = (req.session.userCounter || 0) + 1;
    res.send(`Contador global: ${globalCounter}, Contador do usuário: ${req.session.userCounter}`);
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})