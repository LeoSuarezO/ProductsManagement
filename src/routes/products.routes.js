const express = require("express");
const router = express.Router();
const controller = require("../controller/product.controller")

router.get("/get_products", controller.getProducts);
router.post("/create_product", controller.createProduct);
router.post("/update_product", controller.updateProduct);
router.post("/delete_product", controller.deleteProduct);

module.exports = router;

