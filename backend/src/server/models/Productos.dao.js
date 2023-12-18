const db = require('../databases/db')

const findProductos = async () => await db('SELECT * FROM Productos;')

const findProductosById = async (id) => await db('SELECT * FROM Productos WHERE id = $1;', [id])

const saveProducto = async ({ titulo, descripcion, precio, img }) => {
  try {
    const query = 'INSERT INTO productos (titulo, descripcion, precio, img) VALUES ($1, $2, $3, $4) RETURNING *;'
    const values = [titulo, descripcion, precio, img]
    return await db(query, values)
  } catch (error) {
    console.error('Error al guardar el producto:', error)
    throw error
  }
}

const updateProducto = async (id, { titulo, descripcion, precio, img }) => {
  const query = 'UPDATE productos SET titulo = $2,  descripcion = $3, precio = $4, img = $5 WHERE id = $1 RETURNING *;'
  const values = [id, titulo, descripcion, precio, img]
  return await db(query, values)
}

const deleteProducto = async (id) => await db('DELETE FROM productos WHERE id = $1 RETURNING*;', [id])

module.exports = {
  findProductos,
  findProductosById,
  saveProducto,
  updateProducto,
  deleteProducto
}
