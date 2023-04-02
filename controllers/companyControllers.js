const db = require("../config/db");

const getAllCompanies = (req, res) => {
  const query = "SELECT * FROM company";
  db.query(query, (err, results) => {
    if (err) res.send(err);
    else res.send(results);
  });
};

const getCompanyById = (req, res) => {
  const query = `SELECT * FROM company WHERE id = ${req.params.id}`;
  db.query(query, (err, results) => {
    if (err) res.send(err);
    else res.send(results[0]);
  });
};

const createNewCompany = (req, res) => {
  const { name, email, phone, address } = req.body;
  const logoUrl = "/uploads/company_logos/" + req.file.filename;
  const query = `INSERT INTO company (name, email, phone, address, logo_url) VALUES (?, ?, ?, ?, ?)`;
  db.query(query, [name, email, phone, address, logoUrl], (err, results) => {
    if (err) res.send(err);
    else res.send(results);
  });
};

const updateCompanyById = (req, res) => {
  const { name, email, phone, address } = req.body;
  const query = `UPDATE company SET name = ?, email = ?, phone = ?, address = ? WHERE id = ?`;
  db.query(
    query,
    [name, email, phone, address, req.params.id],
    (err, results) => {
      if (err) res.send(err);
      else res.send(results);
    }
  );
};

const deleteCompanyById = (req, res) => {
  const query = `DELETE FROM company WHERE id = ${req.params.id}`;
  db.query(query, (err, results) => {
    if (err) res.send(err);
    else res.send(results);
  });
};

module.exports = {
  getAllCompanies,
  getCompanyById,
  createNewCompany,
  updateCompanyById,
  deleteCompanyById,
};
