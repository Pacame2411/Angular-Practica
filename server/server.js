const express = require('express');
const app = express(); // Primero inicializas app
const port = 3000;

app.use(express.static('public')); // Luego usas app

app.get('/', (req, res) => res.send('Hola Mundo!'));

app.listen(port, () => console.log(`Servidor ejecutándose en http://localhost:${port}`));
