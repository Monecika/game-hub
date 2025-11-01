import Emoji from "../../../components/emoji/Emoji";
import getCroppedImageUrl from "../../../services/imageUrl";
import PlatformIconList from "../../platforms/components/PlatformIconList";
import type { Game } from "../entities/Game";
import CriticScore from "./CriticScore";
import "../styles/GameStyles.css";
import { Link } from "react-router-dom";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Link to={`/games/${game.slug}`} className="text-decoration-none">
      <div className="card h-100 w-100 hover-effect">
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
    </Link>
  );
};

export default GameCard;
