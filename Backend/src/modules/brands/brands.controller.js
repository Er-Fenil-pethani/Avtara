const service = require("./brands.service");

const createBrand = async (
  req,
  res,
  next
) => {
  try {
    const brand =
      await service.createBrand({
        ...req.body,
        ownerId: req.user.id,
      });

    return res.status(201).json({
      success: true,
      data: brand,
    });
  } catch (error) {
    next(error);
  }
};

const getBrands = async (
  req,
  res,
  next
) => {
  try {
    const brands =
      await service.getBrands();

    return res.status(200).json({
      success: true,
      data: brands,
    });
  } catch (error) {
    next(error);
  }
};

const getBrandById = async (
  req,
  res,
  next
) => {
  try {
    const brand =
      await service.getBrandById(
        req.params.id
      );

    return res.status(200).json({
      success: true,
      data: brand,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createBrand,
  getBrands,
  getBrandById,
};