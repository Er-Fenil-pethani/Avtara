const express =
  require("express");

const controller =
  require("./inventory.controller");

const router =
  express.Router();

router.post(
  "/",
  controller.createInventory
);

router.get(
  "/",
  controller.getInventories
);

router.get(
  "/:id",
  controller.getInventoryById
);

router.put(
  "/:id",
  controller.updateInventory
);

router.delete(
  "/:id",
  controller.deleteInventory
);

module.exports = router;