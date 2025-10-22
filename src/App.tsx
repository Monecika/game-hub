import "./App.css";
import GameGrid from "./components/gameGrid/GameGrid";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center py-3">
            <NavBar></NavBar>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 d-none d-lg-block text-center py-3">
            Aside
          </div>

          <div className="col-12 col-lg-9 py-3">
            <GameGrid></GameGrid>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
