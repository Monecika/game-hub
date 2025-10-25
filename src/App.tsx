import { useState } from "react";
import "./App.css";
import GameGrid from "./components/games/GameGrid";
import GenreList from "./components/genres/GenreList";
import NavBar from "./components/navBar/NavBar";
import type { Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 text-center py-3">
          <NavBar />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-2 d-none d-lg-block text-center py-3">
          <GenreList onSelectGenre={setSelectedGenre} />
        </div>
        <div className="col-12 col-lg-10 py-3">
          <GameGrid selectedGenre={selectedGenre} />
        </div>
      </div>
    </div>
  );
}

export default App;
