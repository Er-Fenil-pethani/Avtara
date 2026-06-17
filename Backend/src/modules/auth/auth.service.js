const bcrypt = require("bcrypt");

const repository = require("./auth.repository");

const generateAccessToken = require("../../utils/generateAccessToken");
const generateRefreshToken = require("../../utils/generateRefreshToken");

const register = async ({
  fullName,
  email,
  password,
}) => {
  const existingUser =
    await repository.findUserByEmail(email);

  if (existingUser) {
    throw new Error("Email already exists");
  }

  const passwordHash =
    await bcrypt.hash(password, 10);

  const user = await repository.createUser({
    fullName,
    email,
    passwordHash,
  });

  const accessToken = generateAccessToken({
    id: user.id,
    email: user.email,
    role: user.role,
  });

  const refreshToken = generateRefreshToken({
    id: user.id,
  });

  return {
    user,
    accessToken,
    refreshToken,
  };
};

const login = async ({
  email,
  password,
}) => {
  const user =
    await repository.findUserByEmail(email);

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isPasswordValid =
    await bcrypt.compare(
      password,
      user.passwordHash
    );

  if (!isPasswordValid) {
    throw new Error("Invalid credentials");
  }

  const accessToken = generateAccessToken({
    id: user.id,
    email: user.email,
    role: user.role,
  });

  const refreshToken = generateRefreshToken({
    id: user.id,
  });

  return {
    user,
    accessToken,
    refreshToken,
  };
};

module.exports = {
  register,
  login,
};