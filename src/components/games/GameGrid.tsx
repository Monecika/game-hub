import type { GameQuery } from "../../App";
import useGames from "../../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

interface GameGridProps {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: GameGridProps) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {error && <p>{error}</p>}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {isLoading &&
          skeletons.map((skeleton) => (
            <div className="col" key={skeleton}>
              <GameCardSkeleton />
            </div>
          ))}
        {!isLoading &&
          data.map((game) => (
            <div className="col" key={game.id}>
              <GameCard game={game} />
            </div>
          ))}
      </div>
    </>
  );
};

export default GameGrid;
