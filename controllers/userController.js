const Producto = require('../models/usermodels');

// vista principal
exports.vista = async (req, res) => {
    const productos = await Producto.getAll();

    res.render('productos', { 
        productos,
        editar: null   // SIEMPRE EXISTE
    });
};

// crear
exports.guardar = async (req, res) => {
    await Producto.create(req.body);
    res.redirect('/productos');
};

// eliminar
exports.eliminar = async (req, res) => {
    await Producto.delete(req.params.id);
    res.redirect('/productos');
};

// actualizar
exports.editar = async (req, res) => {
    const id = req.params.id;
    await Producto.update(id, req.body);
    res.redirect('/productos');
};

// cargar formulario editar
exports.formEditar = async (req, res) => {
    const producto = await Producto.getById(req.params.id);
    const productos = await Producto.getAll();

    res.render('productos', { 
        productos,
        editar: producto || null   // 👈 seguridad extra
    });
};