const express =
  require("express");

const controller =
  require("./products.controller");

const router =
  express.Router();

router.post(
  "/",
  controller.createProduct
);

router.get(
  "/",
  controller.getProducts
);

router.get(
  "/:id",
  controller.getProductById
);

router.put(
  "/:id",
  controller.updateProduct
);

router.delete(
  "/:id",
  controller.deleteProduct
);

module.exports = router;