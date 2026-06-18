const express =
  require("express");

const controller =
  require("./analytics.controller");

const router =
  express.Router();

router.get(
  "/",
  controller.getAnalytics
);

module.exports = router;