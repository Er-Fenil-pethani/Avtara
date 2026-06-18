const express = require("express");

const authRoutes =
  require("../modules/auth/auth.routes");

const brandRoutes =
  require("../modules/brands/brands.routes");

const productRoutes =
  require("../modules/products/products.routes");

const inventoryRoutes =
  require("../modules/inventory/inventory.routes");

const orderRoutes =
  require("../modules/orders/orders.routes");

const reelRoutes =
  require("../modules/reels/reels.routes");

const commentRoutes =
  require("../modules/comments/comments.routes");

const likeRoutes =
  require("../modules/likes/likes.routes");

const router =
  express.Router();

router.get(
  "/health",
  (req, res) => {
    return res.status(200).json({
      success: true,
      message: "API Healthy",
    });
  }
);

router.use(
  "/auth",
  authRoutes
);

router.use(
  "/brands",
  brandRoutes
);

router.use(
  "/products",
  productRoutes
);

router.use(
  "/inventory",
  inventoryRoutes
);

router.use(
  "/orders",
  orderRoutes
);

router.use(
  "/reels",
  reelRoutes
);

router.use(
  "/comments",
  commentRoutes
);

router.use(
  "/likes",
  likeRoutes
);

module.exports = router;