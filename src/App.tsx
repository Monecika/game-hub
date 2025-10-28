import { useState } from "react";
import "./App.css";
import GameGrid from "./components/games/GameGrid";
import GenreList from "./components/genres/GenreList";
import NavBar from "./components/navBar/NavBar";
import PlatformSelector from "./components/platforms/PlatformSelector";
import SortSelector from "./components/sortSelector/SortSelector";
import GameHeading from "./components/games/GameHeading";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState({} as GameQuery);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 text-center py-3">
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </div>
      </div>
      <div className="row">
        <h4 className="text-start ps-4 d-none d-lg-block">Genres</h4>
        <div className="col-lg-2 d-none d-lg-block text-center py-3">
          <GenreList
            onSelectGenre={(genre) =>
              setGameQuery({ ...gameQuery, genreId: genre?.id })
            }
            selectedGenreId={gameQuery.genreId}
          />
        </div>
        <div className="col-12 col-lg-10 py-3">
          <GameHeading gameQuery={gameQuery}></GameHeading>
          <div className="d-flex gap-2 mb-4">
            <PlatformSelector
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platformId: platform?.id })
              }
              selectedPlatformId={gameQuery.platformId}
            ></PlatformSelector>
            <SortSelector
              sortOrder={gameQuery.sortOder}
              onSelectSortOrder={(sortOder) =>
                setGameQuery({ ...gameQuery, sortOder })
              }
            ></SortSelector>
          </div>

          <GameGrid gameQuery={gameQuery} />
        </div>
      </div>
    </div>
  );
}

export default App;
