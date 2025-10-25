import type { Game } from "../../hooks/useGames";
import getCroppedImageUrl from "../../services/image-url";
import CriticScore from "./CriticScore";
import PlatformIconList from "../platforms/PlatformIconList";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <div className="card h-100 w-100">
      <img
        src={getCroppedImageUrl(game.background_image)}
        className="card-img-top"
        alt={game.name}
      />
      <div className="card-body">
        <h5 className="card-title">{game.name}</h5>
        {
          <div className="d-flex justify-content-between align-items-center">
            <>
              <PlatformIconList
                platforms={game.parent_platforms.map((p) => p.platform)}
              />
              <CriticScore score={game.metacritic} />
            </>
          </div>
        }
      </div>
    </div>
  );
};

export default GameCard;
