const db = require('../config/conxion');

// listar
exports.getAll = async () => {
    const [rows] = await db.query('SELECT * FROM productos');
    return rows;
};

// crear
exports.create = async (p) => {
    const { descripcion, precio, stock, id_categoria, id_proveedor } = p;

    const [result] = await db.query(
        `INSERT INTO productos 
        (descripcion, precio, stock, id_categoria, id_proveedor)
        VALUES (?, ?, ?, ?, ?)`,
        [descripcion, precio, stock, id_categoria, id_proveedor]
    );

    return result;
};

// eliminar
exports.delete = async (id) => {
    await db.query('DELETE FROM productos WHERE id_producto=?', [id]);
};

// obtener uno
exports.getById = async (id) => {
    const [rows] = await db.query('SELECT * FROM productos WHERE id_producto=?', [id]);
    return rows[0];
};
exports.update = async (id, p) => {
    const { descripcion, precio, stock, id_categoria, id_proveedor } = p;

    await db.query(
        `UPDATE productos 
        SET descripcion=?, precio=?, stock=?, id_categoria=?, id_proveedor=? 
        WHERE id_producto=?`,
        [descripcion, precio, stock, id_categoria, id_proveedor, id]
    );
};