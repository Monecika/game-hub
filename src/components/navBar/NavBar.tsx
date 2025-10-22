import logo from "../../assets/logo.webp";
import ColorModeSwitch from "../colorModeSwitch/ColorModeSwitch";

const NavBar = () => {
  return (
    <div className="d-flex align-items-center justify-content-between p-1">
      <img src={logo} className="img-fluid" style={{ maxWidth: "60px" }} />
      <ColorModeSwitch></ColorModeSwitch>
    </div>
  );
};

export default NavBar;
