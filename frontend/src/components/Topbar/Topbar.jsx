import useAuthStore from "../../store/authStore";

function Topbar() {
  const user =
    useAuthStore(
      (state) => state.user
    );

  return (
    <div
      style={{
        height: "70px",
        borderBottom:
          "1px solid #ddd",
        display: "flex",
        justifyContent:
          "space-between",
        alignItems: "center",
        padding: "0 30px",
      }}
    >
      <h3>Dashboard</h3>

      <p>
        {user?.fullName ||
          "User"}
      </p>
    </div>
  );
}

export default Topbar;