function UserProfileCard({
  user,
}) {
  return (
    <div
      style={{
        border:
          "1px solid #ddd",
        borderRadius:
          "12px",
        padding:
          "20px",
      }}
    >
      <h2>
        {
          user.fullName
        }
      </h2>

      <p>
        {user.email}
      </p>

      <p>
        Role:
        {" "}
        {user.role}
      </p>
    </div>
  );
}

export default UserProfileCard;