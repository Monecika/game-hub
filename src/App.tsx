import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { themeConfig, type Theme } from "./theme";

function App() {
  const [theme, setTheme] = useState<Theme>(themeConfig.initialColorMode);

  useEffect(() => {
    document.body.setAttribute("data-bs-theme", theme);
  }, [theme]);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center py-3">
            <NavBar></NavBar>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 d-none d-lg-block bg-success text-center py-3">
            Aside
          </div>

          <div className="col-12 col-lg-9 bg-primary text-center py-3 text-white">
            Main
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
