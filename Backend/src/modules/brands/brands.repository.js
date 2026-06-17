const prisma = require("../../config/database");

const createBrand = async (data) => {
  return prisma.brand.create({
    data,
  });
};

const getBrands = async () => {
  return prisma.brand.findMany({
    include: {
      owner: true,
    },
  });
};

const getBrandById = async (id) => {
  return prisma.brand.findUnique({
    where: {
      id,
    },
    include: {
      owner: true,
    },
  });
};

module.exports = {
  createBrand,
  getBrands,
  getBrandById,
};