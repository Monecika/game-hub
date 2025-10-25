import type { Game } from "../../hooks/useGames";
import getCroppedImageUrl from "../../services/image-url";
import Emoji from "../emoji/Emoji";
import PlatformIconList from "../platforms/PlatformIconList";
import CriticScore from "./CriticScore";

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
        {
          <>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <>
                <PlatformIconList
                  platforms={game.parent_platforms.map((p) => p.platform)}
                />
                <CriticScore score={game.metacritic} />
              </>
            </div>
            <h5 className="card-title">
              {game.name} <Emoji rating={game.rating_top}></Emoji>
            </h5>
          </>
        }
      </div>
    </div>
  );
};

export default GameCard;
