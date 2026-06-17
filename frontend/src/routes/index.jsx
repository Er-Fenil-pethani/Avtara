import {
  Routes,
  Route,
} from "react-router-dom";

import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import DashboardPage from "../pages/Dashboard";

import BrandsPage from "../pages/Brands";
import ProductsPage from "../pages/Products";
import InventoryPage from "../pages/Inventory";
import OrdersPage from "../pages/Orders";
import ReelsPage from "../pages/Reels";

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />

      <Route
        path="/login"
        element={<LoginPage />}
      />

      <Route
        path="/register"
        element={<RegisterPage />}
      />

      <Route
        path="/dashboard"
        element={<DashboardPage />}
      />

      <Route
        path="/brands"
        element={<BrandsPage />}
      />

      <Route
        path="/products"
        element={<ProductsPage />}
      />

      <Route
        path="/inventory"
        element={<InventoryPage />}
      />

      <Route
        path="/orders"
        element={<OrdersPage />}
      />

      <Route
        path="/reels"
        element={<ReelsPage />}
      />
    </Routes>
  );
}

export default AppRoutes;