import { useState } from "react";
import "./App.css";
import GameGrid from "./components/games/GameGrid";
import GenreList from "./components/genres/GenreList";
import NavBar from "./components/navBar/NavBar";
import type { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/platforms/PlatformSelector";
import type { Platform } from "./hooks/useGames";
import SortSelector from "./components/sortSelector/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOder: string;
  searchText: string;
}

function App() {
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setPlatform] = useState<Platform | null>(null);

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
        <div className="col-lg-2 d-none d-lg-block text-center py-3">
          <GenreList
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}
          />
        </div>
        <div className="col-12 col-lg-10 py-3">
          <div className="d-flex gap-2 mb-4">
            <PlatformSelector
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
              selectedPlatform={gameQuery.platform}
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
