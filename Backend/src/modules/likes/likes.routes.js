const express =
  require("express");

const controller =
  require("./likes.controller");

const router =
  express.Router();

router.post(
  "/",
  controller.createLike
);

router.get(
  "/",
  controller.getLikes
);

module.exports = router;