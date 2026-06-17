import { useNavigate } from "react-router-dom";

function QuickActions() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        marginTop: "40px",
      }}
    >
      <h2>Quick Actions</h2>

      <div
        style={{
          display: "flex",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        <button
          onClick={() =>
            navigate("/brands")
          }
        >
          Create Brand
        </button>

        <button
          onClick={() =>
            navigate("/products")
          }
        >
          Add Product
        </button>

        <button
          onClick={() =>
            navigate("/inventory")
          }
        >
          Inventory
        </button>

        <button
          onClick={() =>
            navigate("/orders")
          }
        >
          Orders
        </button>
      </div>
    </div>
  );
}

export default QuickActions;