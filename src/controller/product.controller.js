const db = require("../database");

exports.getProducts = async(req, res) => {
    const result = await db.query("SELECT * FROM products");
    res.status(200).json(result);
};

exports.createProduct = async(req, res) => {
    const {product_name, product_price, stock} = req.body;
    await db.query("INSERT INTO products (product_name, product_price, stock) VALUES (?, ?, ?)", [product_name, product_price, stock]);
    res.sendStatus(201);
}

exports.deleteProduct = async(req, res) => {
    id_product = req.body.id_product;
    await db.query("DELETE FROM products WHERE id_products = ?", [id_product]);
    res.sendStatus(200);
}

exports.updateProduct = async(req, res) => {
    const {product_name, product_price, stock} = req.body;
    await db.query("UPDATE products SET product_name = ?, product_price = ?, stock = ?", [product_name, product_price, stock]);
    res.sendStatus(200);
}
