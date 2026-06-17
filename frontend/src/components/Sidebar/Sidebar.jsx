import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        borderRight:
          "1px solid #ddd",
        padding: "20px",
      }}
    >
      <h2>Avtara</h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          marginTop: "30px",
        }}
      >
        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/brands">
          Brands
        </Link>

        <Link to="/products">
          Products
        </Link>

        <Link to="/inventory">
          Inventory
        </Link>

        <Link to="/orders">
          Orders
        </Link>

        <Link to="/reels">
          Reels
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;