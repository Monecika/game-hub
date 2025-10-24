import "./App.css";
import GameGrid from "./components/games/GameGrid";
import GenreList from "./components/genres/GenreList";
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
          <div className="col-lg-2 d-none d-lg-block text-center py-3">
            <GenreList></GenreList>
          </div>

          <div className="col-12 col-lg-10 py-3">
            <GameGrid></GameGrid>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
