const express =
  require("express");

const controller =
  require("./orders.controller");

const router =
  express.Router();

router.post(
  "/",
  controller.createOrder
);

router.get(
  "/",
  controller.getOrders
);

router.get(
  "/:id",
  controller.getOrderById
);

router.put(
  "/:id",
  controller.updateOrder
);

router.delete(
  "/:id",
  controller.deleteOrder
);

module.exports = router;