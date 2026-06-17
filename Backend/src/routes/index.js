const express = require("express");

const authRoutes =
  require("../modules/auth/auth.routes.js");

const brandRoutes =
  require("../modules/brands/brands.routes");

const router = express.Router();

router.get("/health", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "API Healthy",
  });
});

router.use(
  "/auth",
  authRoutes
);

router.use(
  "/brands",
  brandRoutes
);

module.exports = router;