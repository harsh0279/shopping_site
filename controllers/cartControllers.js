const db = require("../config/db");

const getCustomerShoppingCart = (req, res) => {
  const query = `SELECT * FROM shopping_cart WHERE customer_id = ${req.params.id}`;
  db.query(query, (err, results) => {
    if (err) res.send(err);
    else res.send(results);
  });
};

const getShoppingCartItem = (req, res) => {
  const query = `SELECT * FROM shopping_cart WHERE customer_id = ${req.params.id} AND id = ${req.params.itemId}`;
  db.query(query, (err, results) => {
    if (err) res.send(err);
    else res.send(results);
  });
};

const addShoppingCartItem = (req, res) => {
  const { productId, quantity } = req.body;
  const query = `INSERT INTO shopping_cart (customer_id, product_id, quantity) VALUES (${req.params.id}, ${productId}, ${quantity})`;
  db.query(query, (err, results) => {
    if (err) res.send(err);
    else res.send(`Item added to shopping cart with id: ${results.insertId}`);
  });
};

const updateShoppingCartItem = (req, res) => {
  const { productId, quantity } = req.body;
  const query = `UPDATE shopping_cart SET product_id = ${productId}, quantity = ${quantity} WHERE customer_id = ${req.params.id} AND id = ${req.params.itemId}`;
  db.query(query, (err, results) => {
    if (err) res.send(err);
    else res.send(`Item in shopping cart with id ${req.params.itemId} updated`);
  });
};

const deleteShoppingCartItem = (req, res) => {
  const query = `DELETE FROM shopping_cart WHERE customer_id = ${req.params.id} AND id = ${req.params.itemId}`;
  db.query(query, (err, results) => {
    if (err) res.send(err);
    else res.send(`Item in shopping cart with id ${req.params.itemId} deleted`);
  });
};

module.exports = {
  getCustomerShoppingCart,
  getShoppingCartItem,
  addShoppingCartItem,
  updateShoppingCartItem,
  deleteShoppingCartItem,
};
