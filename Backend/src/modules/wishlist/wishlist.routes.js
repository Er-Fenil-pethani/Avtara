const express = require("express");

const controller = require(
  "./wishlist.controller"
);

const router =
  express.Router();

router.get(
  "/",
  controller.getWishlist
);

router.post(
  "/",
  controller.createWishlist
);

module.exports = router;