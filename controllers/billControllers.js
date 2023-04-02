const db = require("../config/db");

const getAllBills = (req, res) => {
  const query = "SELECT * FROM bill";
  db.query(query, (err, results) => {
    if (err) res.send(err);
    else res.send(results);
  });
};

const getBillById = (req, res) => {
  const query = `SELECT * FROM bill WHERE id = ${req.params.id}`;
  db.query(query, (err, results) => {
    if (err) res.send(err);
    else res.send(results[0]);
  });
};

const createBill = (req, res) => {
  const { customer_id, delivery_address_id, total_amount, payment_method } =
    req.body;
  const query = `INSERT INTO bill (customer_id, delivery_address_id, total_amount, payment_method) VALUES (${customer_id}, ${delivery_address_id}, ${total_amount}, '${payment_method}')`;
  db.query(query, (err, results) => {
    if (err) res.send(err);
    else res.send("Bill added successfully");
  });
};

const updateBill = (req, res) => {
  const { customer_id, delivery_address_id, total_amount, payment_method } =
    req.body;
  const query = `UPDATE bill SET customer_id = ${customer_id}, delivery_address_id = ${delivery_address_id}, total_amount = ${total_amount}, payment_method = '${payment_method}' WHERE id = ${req.params.id}`;
  db.query(query, (err, results) => {
    if (err) res.send(err);
    else res.send("Bill updated successfully");
  });
};

const deleteBill = (req, res) => {
  const query = `DELETE FROM bill WHERE id = ${req.params.id}`;
  db.query(query, (err, results) => {
    if (err) res.send(err);
    else res.send("Bill deleted successfully");
  });
};

const getBillsByCustomerId = (req, res) => {
  const query = `SELECT * FROM bill WHERE customer_id = ${req.params.id}`;
  db.query(query, (err, results) => {
    if (err) res.send(err);
    else res.send(results);
  });
};

module.exports = {
  getAllBills,
  getBillById,
  createBill,
  updateBill,
  deleteBill,
  getBillsByCustomerId,
};
