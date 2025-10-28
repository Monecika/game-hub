import type { GameQuery } from "../../App";
import useGenre from "../../hooks/genres/useGenre";
import usePlatform from "../../hooks/platforms/usePlatform";

interface GameHeading {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeading) => {
  const platformName = usePlatform(gameQuery.platformId);

  const genreName = useGenre(gameQuery.genreId);

  const heading = `${platformName} ${genreName} Games`;

  return <h1 className="mb-4">{heading}</h1>;
};

export default GameHeading;
