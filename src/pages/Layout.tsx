import { Outlet } from "react-router-dom";
import NavBar from "../components/navBar/NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div className="p-3">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
