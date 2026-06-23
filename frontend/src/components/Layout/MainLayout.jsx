import Navbar
  from "../Navbar/Navbar";

function MainLayout({
  children,
}) {
  return (
    <>
      <Navbar />

      <main
        style={{
          minHeight:
            "100vh",
          padding:
            "20px",
        }}
      >
        {children}
      </main>
    </>
  );
}

export default MainLayout;