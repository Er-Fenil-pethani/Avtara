import {
  Routes,
  Route,
} from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";
import Inventory from "../pages/Inventory";
import Orders from "../pages/Orders";
import Reels from "../pages/Reels";
import AIStylist from "../pages/AIStylist";

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/products"
        element={<Products />}
      />

      <Route
        path="/inventory"
        element={<Inventory />}
      />

      <Route
        path="/orders"
        element={<Orders />}
      />

      <Route
        path="/reels"
        element={<Reels />}
      />

      <Route
        path="/ai-stylist"
        element={<AIStylist />}
      />
    </Routes>
  );
}

export default AppRoutes;