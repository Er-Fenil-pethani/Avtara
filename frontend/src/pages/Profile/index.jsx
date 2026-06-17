import useAuthStore from "../../store/authStore";

function ProfilePage() {
  const user =
    useAuthStore(
      (state) => state.user
    );

  return (
    <div
      style={{
        padding: "30px",
      }}
    >
      <h1>Profile</h1>

      <p>
        Name:
        {" "}
        {user?.fullName}
      </p>

      <p>
        Email:
        {" "}
        {user?.email}
      </p>

      <p>
        Role:
        {" "}
        {user?.role}
      </p>
    </div>
  );
}

export default ProfilePage;