import useGames from "../../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <p>{error}</p>}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {games.map((game) => (
          <div className="col" key={game.id}>
            <GameCard game={game} />
          </div>
        ))}
      </div>
    </>
  );
};

export default GameGrid;
