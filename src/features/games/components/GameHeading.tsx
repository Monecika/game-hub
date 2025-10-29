import type { GameQuery } from "../../../App";
import useGenre from "../../genres/hooks/useGenre";
import usePlatform from "../../platforms/hooks/usePlatform";

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
