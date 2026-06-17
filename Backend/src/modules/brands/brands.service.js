const repository = require("./brands.repository");

const createBrand = async ({
  name,
  description,
  logoUrl,
  ownerId,
}) => {
  return repository.createBrand({
    name,
    description,
    logoUrl,
    ownerId,
  });
};

const getBrands = async () => {
  return repository.getBrands();
};

const getBrandById = async (id) => {
  return repository.getBrandById(id);
};

module.exports = {
  createBrand,
  getBrands,
  getBrandById,
};