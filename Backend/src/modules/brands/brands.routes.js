const express = require("express");

const controller =
  require("./brands.controller");

const authMiddleware =
  require("../../middleware/auth.middleware");

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  controller.createBrand
);

router.get(
  "/",
  controller.getBrands
);

router.get(
  "/:id",
  controller.getBrandById
);

module.exports = router;