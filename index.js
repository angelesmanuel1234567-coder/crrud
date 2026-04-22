const express = require('express');
const path = require('path');

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'vistas'));

app.get('/productos-test', async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM productos");
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.send("Error productos");
  }
});

// redirección
app.get('/', (req, res) => {
    res.redirect('/productos');
});

// ✔ PUERTO CORRECTO PARA RENDER
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
