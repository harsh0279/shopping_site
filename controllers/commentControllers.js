const db = require("../config/db");

const getAllComments = (req, res) => {
  const query = "SELECT * FROM comment";
  db.query(query, (err, results) => {
    if (err) res.send(err);
    else res.send(results);
  });
};

const getCommentsById = (req, res) => {
  const query = `SELECT * FROM comment WHERE id = ${req.params.id}`;
  db.query(query, (err, results) => {
    if (err) res.send(err);
    else res.send(results[0]);
  });
};

const createComment = (req, res) => {
  const { customer_id, product_id, comment, rating } = req.body;
  const query = `INSERT INTO comment (customer_id, product_id, comment, rating) VALUES (${customer_id}, ${product_id}, '${comment}', ${rating})`;
  db.query(query, (err, results) => {
    if (err) res.send(err);
    else res.send("Comment added successfully");
  });
};

const updateCommentById = (req, res) => {
  const { customer_id, product_id, comment, rating } = req.body;
  const query = `UPDATE comment SET customer_id = ${customer_id}, product_id = ${product_id}, comment = '${comment}', rating = ${rating} WHERE id = ${req.params.id}`;
  db.query(query, (err, results) => {
    if (err) res.send(err);
    else res.send("Comment updated successfully");
  });
};

const deleteCommentById = (req, res) => {
  const query = `DELETE FROM comment WHERE id = ${req.params.id}`;
  db.query(query, (err, results) => {
    if (err) res.send(err);
    else res.send("Comment deleted successfully");
  });
};

const getCommentsByCustomerId = (req, res) => {
  const query = `SELECT * FROM comment WHERE customer_id = ${req.params.id}`;
  db.query(query, (err, results) => {
    if (err) res.send(err);
    else res.send(results);
  });
};

const getCommentsByProductId = (req, res) => {
  const query = `SELECT * FROM comment WHERE product_id = ${req.params.id}`;
  db.query(query, (err, results) => {
    if (err) res.send(err);
    else res.send(results);
  });
};

module.exports = {
  getAllComments,
  getCommentsById,
  createComment,
  updateCommentById,
  deleteCommentById,
  getCommentsByCustomerId,
  getCommentsByProductId,
};
