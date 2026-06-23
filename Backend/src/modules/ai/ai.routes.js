const express =
  require("express");

const controller =
  require("./ai.controller");

const router =
  express.Router();

router.post(
  "/generate-outfit",
  controller.generateOutfit
);

module.exports = router;