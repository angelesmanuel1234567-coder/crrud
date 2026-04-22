const Producto = require('../models/usermodels');

// vista principal
exports.vista = async (req, res) => {
    try {
        const productos = await Producto.getAll();

      res.render('productos', { 
    productos,
    editar: null
});

    } catch (error) {
        console.error("ERROR EN VISTA:", error);
        res.status(500).send("Error al cargar productos");
    }
};

// crear
exports.guardar = async (req, res) => {
    try {
        await Producto.create(req.body);
        res.redirect('/productos');
    } catch (error) {
        console.error("ERROR AL GUARDAR:", error);
        res.send("Error al guardar");
    }
};

// eliminar
exports.eliminar = async (req, res) => {
    try {
        await Producto.delete(req.params.id);
        res.redirect('/productos');
    } catch (error) {
        console.error("ERROR AL ELIMINAR:", error);
        res.send("Error al eliminar");
    }
};

// actualizar
exports.editar = async (req, res) => {
    try {
        const id = req.params.id;
        await Producto.update(id, req.body);
        res.redirect('/productos');
    } catch (error) {
        console.error("ERROR AL EDITAR:", error);
        res.send("Error al editar");
    }
};

// cargar formulario editar
exports.formEditar = async (req, res) => {
    try {
        const producto = await Producto.getById(req.params.id);
        const productos = await Producto.getAll();

        res.render('productos', { 
            productos,
            editar: producto || null
        });

    } catch (error) {
        console.error("ERROR FORM EDITAR:", error);
        res.send("Error al editar formulario");
    }
};
