const express =
  require("express");

const upload =
  require(
    "../../middleware/upload.middleware"
  );

const router =
  express.Router();

router.post(
  "/",
  upload.single(
    "image"
  ),
  async (
    req,
    res
  ) => {
    try {
      return res.json({
        success: true,
        imageUrl:
          `/uploads/products/${req.file.filename}`,
      });
    } catch (
      error
    ) {
      return res.status(
        500
      ).json({
        success: false,
        message:
          error.message,
      });
    }
  }
);

module.exports =
  router;