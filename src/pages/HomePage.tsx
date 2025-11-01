import BackToTopButton from "../components/backToTop/BackToTopButton";
import SortSelector from "../components/sortSelector/SortSelector";
import GameGrid from "../features/games/components/GameGrid";
import GameHeading from "../features/games/components/GameHeading";
import GenreList from "../features/genres/components/GenreList";
import PlatformSelector from "../features/platforms/components/PlatformSelector";

const HomePage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <h4 className="text-start ps-4 d-none d-lg-block">Genres</h4>
        <div className="col-lg-2 d-none d-lg-block text-center py-3">
          <GenreList />
        </div>
        <div className="col-12 col-lg-10 py-3">
          <GameHeading></GameHeading>
          <div className="d-flex gap-2 mb-4">
            <PlatformSelector />
            <SortSelector />
          </div>

          <GameGrid />
        </div>
      </div>
      <BackToTopButton />
    </div>
  );
};

export default HomePage;
