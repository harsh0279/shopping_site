const db = require("../config/db");

const getAllProducts = (req, res) => {
  const query = "SELECT * FROM product";
  db.query(query, (err, results) => {
    if (err) res.send(err);
    else res.send(results);
  });
};

const getProductById = (req, res) => {
  const query = `SELECT * FROM product WHERE id = ${req.params.id}`;
  db.query(query, (err, results) => {
    if (err) res.send(err);
    else res.send(results[0]);
  });
};

const createNewProduct = (req, res) => {
  const { name, description, category_id, company_id, price, quantity } =
    req.body;
  const image_url = "/uploads/product_images/" + req.file.filename;
  const query = `INSERT INTO product (name, description, image_url, category_id, company_id, price, quantity) VALUES (?, ?, ?, ?, ?, ?, ?)`;
  db.query(
    query,
    [name, description, image_url, category_id, company_id, price, quantity],
    (err, results) => {
      if (err) res.send(err);
      else res.send(`New product added with ID: ${results.insertId}`);
    }
  );
};

const updateProductById = (req, res) => {
  const { name, description, price, quantity } = req.body;
  const query = `UPDATE product SET name = ?, description = ?, price = ?, quantity = ? WHERE id = ?`;
  conn.query(
    query,
    [name, description, price, quantity, req.params.id],
    (err, results) => {
      if (err) res.send(err);
      else res.send(`Product with ID ${req.params.id} has been updated`);
    }
  );
};

const deleteProductById = (req, res) => {
  const query = `DELETE FROM product WHERE id = ?`;
  conn.query(query, [req.params.id], (err, results) => {
    if (err) res.send(err);
    else res.send(results);
  });
};

module.exports = {
  getAllProducts,
  getProductById,
  createNewProduct,
  updateProductById,
  deleteProductById,
};
