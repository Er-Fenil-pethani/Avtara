import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";

function DashboardPage() {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
        }}
      >
        <Topbar />

        <div
          style={{
            padding: "30px",
          }}
        >
          <h1>
            Welcome to Avtara
          </h1>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(4,1fr)",
              gap: "20px",
              marginTop: "30px",
            }}
          >
            <div
              style={{
                border:
                  "1px solid #ddd",
                padding: "20px",
              }}
            >
              <h3>Brands</h3>
              <h1>0</h1>
            </div>

            <div
              style={{
                border:
                  "1px solid #ddd",
                padding: "20px",
              }}
            >
              <h3>Products</h3>
              <h1>0</h1>
            </div>

            <div
              style={{
                border:
                  "1px solid #ddd",
                padding: "20px",
              }}
            >
              <h3>Orders</h3>
              <h1>0</h1>
            </div>

            <div
              style={{
                border:
                  "1px solid #ddd",
                padding: "20px",
              }}
            >
              <h3>Revenue</h3>
              <h1>₹0</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;