import {
  Link,
} from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        padding:
          "15px",
        borderBottom:
          "1px solid #ddd",
        display:
          "flex",
        gap: "20px",
      }}
    >
      <Link
        to="/dashboard"
      >
        Dashboard
      </Link>

      <Link
        to="/products"
      >
        Products
      </Link>

      <Link
        to="/orders"
      >
        Orders
      </Link>

      <Link
        to="/inventory"
      >
        Inventory
      </Link>

      <Link
        to="/reels"
      >
        Reels
      </Link>

      <Link
        to="/ai-stylist"
      >
        AI Stylist
      </Link>
    </nav>
  );
}

export default Navbar;