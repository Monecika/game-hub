import logo from "../../assets/logo.webp";
import ColorModeSwitch from "../colorModeSwitch/ColorModeSwitch";
import SearchInput from "../seach/SearchInput";

interface NavBarProps {
  onSearch: (searchText: string) => void;
}
const NavBar = ({ onSearch }: NavBarProps) => {
  return (
    <div className="d-flex align-items-center p-1 gap-3">
      <img src={logo} className="img-fluid" style={{ maxWidth: "60px" }} />
      <SearchInput onSearch={onSearch}></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </div>
  );
};

export default NavBar;
