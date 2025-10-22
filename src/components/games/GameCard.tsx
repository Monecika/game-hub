import type { Game } from "../../hooks/useGames";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <div className="card h-100 w-100">
      <img
        src={game.background_image}
        className="card-img-top"
        alt={game.name}
      />
      <div className="card-body">
        <h5 className="card-title">{game.name}</h5>
        {/* <p className="card-text">
          {game.description || "No description available."}
        </p> */}
      </div>
    </div>
  );
};

export default GameCard;
