import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";
import ColorModeSwitch from "../colorModeSwitch/ColorModeSwitch";
import SearchInput from "../seach/SearchInput";

const NavBar = () => {
  return (
    <div className="d-flex align-items-center p-1 gap-3">
      <Link to={"/"}>
        <img src={logo} className="img-fluid" style={{ maxWidth: "60px" }} />
      </Link>
      <SearchInput></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </div>
  );
};

export default NavBar;
