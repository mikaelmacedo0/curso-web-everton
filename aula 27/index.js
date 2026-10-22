const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Olá meu primeiro servidor');
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta http://localhost:3000');
});

app.get('/horarios', (req, res) => {
    res.json([
        { dia: 'Segunda-feira', horario: '18h' },
        { dia: 'Quarta-feira', horario: '19h' },
    ]);
});