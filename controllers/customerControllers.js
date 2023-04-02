const db = require("../config/db");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const getAllCustomers = (req, res) => {
  const query = "SELECT * FROM customer";
  db.query(query, (err, results) => {
    if (err) res.send(err);
    else res.send(results);
  });
};

const getCustomerById = (req, res) => {
  const query = `SELECT * FROM customer WHERE id = ${req.params.id}`;
  db.query(query, (err, results) => {
    if (err) res.send(err);
    else res.send(results[0]);
  });
};

const createNewCustomer = (req, res) => {
  const { name, email, password, phone, gender, dob } = req.body;
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) res.send(err);
    const query = `INSERT INTO customer (name, email, password, phone, gender, dob) VALUES (?, ?, ?, ?, ?, ?)`;
    db.query(query, [name, email, hash, phone, gender, dob], (err, results) => {
      if (err) res.send(err);
      else res.send(results);
    });
  });
};

const updateCustomerById = (req, res) => {
  const { name, email, password, phone, gender, dob } = req.body;
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) res.send(err);
    const query = `UPDATE customer SET name = ?, email = ?, password = ?, phone = ?, gender = ?, dob = ? WHERE id = ?`;
    db.query(
      query,
      [name, email, hash, phone, gender, dob, req.params.id],
      (err, results) => {
        if (err) res.send(err);
        else res.send(results);
      }
    );
  });
};

const deleteCustomerById = (req, res) => {
  const query = `DELETE FROM customer WHERE id = ${req.params.id}`;
  db.query(query, (err, results) => {
    if (err) res.send(err);
    else res.send(results);
  });
};

module.exports = {
  getAllCustomers,
  getCustomerById,
  createNewCustomer,
  updateCustomerById,
  deleteCustomerById,
};
