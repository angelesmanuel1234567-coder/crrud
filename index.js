const express = require('express');
const path = require('path');

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'vistas'));

// rutas
const rutas = require('./routes/userRoutes');
app.use('/', rutas);
    
app.get('/', (req, res) => {
    res.redirect('/productos');
});

app.listen(3000, () => {
    console.log('Servidor http://localhost:3000');
});