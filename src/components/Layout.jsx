const Layout = ({ children }) => {
  const container = {
    margin: "1rem 1.5rem",
    backgroundColor: "pink",
    padding: "1rem 1.5rem",
  };
  return (
    <>
      <main style={container}>{children}</main>
    </>
  );
};

export default Layout;
