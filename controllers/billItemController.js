const db = require("../config/db");

const getAllBillItems = (req, res) => {
  const query = "SELECT * FROM bill_item";
  db.query(query, (err, results) => {
    if (err) res.send(err);
    else res.send(results);
  });
};

const getBillItemById = (req, res) => {
  const query = `SELECT * FROM bill_item WHERE id = ${req.params.id}`;
  db.query(query, (err, results) => {
    if (err) res.send(err);
    else res.send(results[0]);
  });
};

const createBillItem = (req, res) => {
  const { bill_id, product_id, price, quantity } = req.body;
  const query = `INSERT INTO bill_item (bill_id, product_id, price, quantity) VALUES (${bill_id}, ${product_id}, ${price}, '${quantity}')`;
  db.query(query, (err, results) => {
    if (err) res.send(err);
    else res.send("Bill Item added successfully");
  });
};

const updateBillItemById = (req, res) => {
  const { bill_id, product_id, price, quantity } = req.body;
  const query = `UPDATE bill_item SET bill_id = ${bill_id}, product_id = ${product_id}, price = ${price}, quantity = '${quantity}' WHERE id = ${req.params.id}`;
  db.query(query, (err, results) => {
    if (err) res.send(err);
    else res.send("Bill Item updated successfully");
  });
};

const deleteBillItemById = (req, res) => {
  const query = `DELETE FROM bill_item WHERE id = ${req.params.id}`;
  db.query(query, (err, results) => {
    if (err) res.send(err);
    else res.send("Bill Item deleted successfully");
  });
};

module.exports = {
  getAllBillItems,
  getBillItemById,
  createBillItem,
  updateBillItemById,
  deleteBillItemById,
};
