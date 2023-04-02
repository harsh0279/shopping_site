const db = require("../config/db");

const getAllDeliveryAddresses = (req, res) => {
  const query = "SELECT * FROM delivery_address";
  db.query(query, (err, results) => {
    if (err) res.send(err);
    else res.send(results);
  });
};

const getDeliveryAddressById = (req, res) => {
  const query = `SELECT * FROM delivery_address WHERE id = ${req.params.id}`;
  db.query(query, (err, results) => {
    if (err) res.send(err);
    else res.send(results);
  });
};

const createDeliveryAddress = (req, res) => {
  const { customer_id, address, city, state, pincode } = req.body;
  const query = `INSERT INTO delivery_address (customer_id, address, city, state, pincode) VALUES (${customer_id}, '${address}', '${city}', '${state}', '${pincode}')`;
  db.query(query, (err, results) => {
    if (err) res.send(err);
    else res.send(results);
  });
};

const updateDeliveryAddress = (req, res) => {
  const { customer_id, address, city, state, pincode } = req.body;
  const query = `INSERT INTO delivery_address (customer_id, address, city, state, pincode) VALUES (${customer_id}, '${address}', '${city}', '${state}', '${pincode}')`;
  db.query(query, (err, results) => {
    if (err) res.send(err);
    else res.send(results);
  });
};

const deleteDeliveryAddress = (req, res) => {
  const query = `DELETE FROM delivery_address WHERE id = ${req.params.id}`;
  db.query(query, (err, results) => {
    if (err) res.send(err);
    else res.send(results);
  });
};

const getAllDeliveryAddressesForCustomer = (req, res) => {
  const query = `SELECT * FROM delivery_address WHERE customer_id = ${req.params.id}`;
  db.query(query, (err, results) => {
    if (err) res.send(err);
    else res.send(results);
  });
};

module.exports = {
  getAllDeliveryAddresses,
  getDeliveryAddressById,
  createDeliveryAddress,
  updateDeliveryAddress,
  deleteDeliveryAddress,
  getAllDeliveryAddressesForCustomer,
};
