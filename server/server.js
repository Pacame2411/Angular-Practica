const express = require('express');
app.use(express.static('public'));
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hola Mundo!'));

app.listen(port, () => console.log(`Servidor ejecutándose en http://localhost:${port}`));
