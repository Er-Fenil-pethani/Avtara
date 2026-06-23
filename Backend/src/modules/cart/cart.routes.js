const express = require("express");

const controller = require(
  "./cart.controller"
);

const router =
  express.Router();

router.get(
  "/",
  controller.getCart
);

router.post(
  "/",
  controller.createCart
);

module.exports = router;