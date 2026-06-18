const express =
  require("express");

const controller =
  require("./reels.controller");

const router =
  express.Router();

router.post(
  "/",
  controller.createReel
);

router.get(
  "/",
  controller.getReels
);

module.exports = router;