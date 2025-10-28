import type { GameQuery } from "../../App";
import useGenres from "../../hooks/useGenres";
import usePlatforms from "../../hooks/usePlatforms";

interface GameHeading {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeading) => {
  const { data: platforms } = usePlatforms();
  const { data: genres } = useGenres();

  const platformName =
    platforms.find((platform) => platform.id === gameQuery.platformId)?.name ||
    "";

  const genreName =
    genres.find((genre) => genre.id === gameQuery.genreId)?.name || "";

  const heading = `${platformName} ${genreName} Games`;

  return <h1 className="mb-4">{heading}</h1>;
};

export default GameHeading;
