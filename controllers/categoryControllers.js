const db = require("../config/db");

const getAllCategories = (req, res) => {
  const query = "SELECT * FROM category";
  db.query(query, (err, results) => {
    if (err) res.send(err);
    else res.send(results);
  });
};

const getCategoryById = (req, res) => {
  const query = `SELECT * FROM category WHERE id = ${req.params.id}`;
  db.query(query, (err, results) => {
    if (err) res.send(err);
    else res.send(results[0]);
  });
};

const createNewCategory = (req, res) => {
  const { name, description } = req.body;
  const image_url = "/uploads/category_images/" + req.file.filename;
  const query = `INSERT INTO category (name, description, image_url) VALUES ('${name}', '${description}', '${image_url}')`;
  db.query(query, (err, results) => {
    if (err) res.send(err);
    else res.send(`New category added with ID: ${results.insertId}`);
  });
};

const updateCategoryById = (req, res) => {
  const { name, description } = req.body;
  const query = `UPDATE category SET name='${name}', description='${description}' WHERE id=${req.params.id}`;
  db.query(query, (err, results) => {
    if (err) res.send(err);
    else res.send(`Category with ID ${req.params.id} has been updated`);
  });
};

const deleteCategoryById = (req, res) => {
  const query = `DELETE FROM category WHERE id=${req.params.id}`;
  db.query(query, (err, results) => {
    if (err) res.send(err);
    else res.send(`Category with ID ${req.params.id} has been deleted`);
  });
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createNewCategory,
  updateCategoryById,
  deleteCategoryById,
};
