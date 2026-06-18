const express =
  require("express");

const controller =
  require("./comments.controller");

const router =
  express.Router();

router.post(
  "/",
  controller.createComment
);

router.get(
  "/",
  controller.getComments
);

router.delete(
  "/:id",
  controller.deleteComment
);

module.exports = router;