import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <div className="d-flex align-items-center">
      <img src={logo} className="img-fluid" style={{ maxWidth: "60px" }} />
      <p className="mb-0">NavBar</p>
    </div>
  );
};

export default NavBar;
