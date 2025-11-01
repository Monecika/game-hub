import DefinitionItem from "../../../components/DefinitionItem/DefinitionItem";
import type { Game } from "../entities/Game";
import CriticScore from "./CriticScore";

interface GameAttributesProps {
  game: Game;
}

const GameAttributes = ({ game }: GameAttributesProps) => {
  return (
    <dl className="row g-5">
      <DefinitionItem term="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <p className="m-0" key={platform.id}>
            {platform.name}
          </p>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Metascore">
        <CriticScore score={game.metacritic}></CriticScore>
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {game.genres?.map((genre) => (
          <p className="m-0" key={genre.id}>
            {genre.name}
          </p>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {game.publishers?.map((publisher) => (
          <p className="m-0" key={publisher.id}>
            {publisher.name}
          </p>
        ))}
      </DefinitionItem>
    </dl>
  );
};

export default GameAttributes;
