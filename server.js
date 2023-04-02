const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const port = 3001;

const db = require("./config/db");
const customerRoutes = require("./routes/customerRoutes");
const companyRoutes = require("./routes/companyRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const addressRoutes = require("./routes/addressRoutes");
const billRoutes = require("./routes/billRoutes");
const billItemRoutes = require("./routes/billItemRoutes");
const commentRoutes = require("./routes/commentRoutes");

const app = express();
app.use(express.static(path.join(__dirname, "uploads")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/customers", customerRoutes);
app.use("/api/companies", companyRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/bills", billRoutes);
app.use("/api/bill-items", billItemRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/address", addressRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.resolve("./public/index.html"));
});
app.get("/create_customer", (req, res) => {
  res.sendFile(path.resolve("./public/customer_form.html"));
});
app.get("/create_company", (req, res) => {
  res.sendFile(path.resolve("./public/company_form.html"));
});
app.get("/create_category", (req, res) => {
  res.sendFile(path.resolve("./public/category_form.html"));
});
app.get("/create_product", (req, res) => {
  res.sendFile(path.resolve("./public/product_form.html"));
});
app.get("/create_address", (req, res) => {
  res.sendFile(path.resolve("./public/address_form.html"));
});
app.get("/create_bill", (req, res) => {
  res.sendFile(path.resolve("./public/bill_form.html"));
});
app.get("/create_bill_item", (req, res) => {
  res.sendFile(path.resolve("./public/bill_item_form.html"));
});
app.get("/create_comment", (req, res) => {
  res.sendFile(path.resolve("./public/comment_form.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
