import useGameQueryStore from "../../../store";
import useGenre from "../../genres/hooks/useGenre";
import usePlatform from "../../platforms/hooks/usePlatform";

const GameHeading = () => {
  const genreId = useGameQueryStore((selector) => selector.gameQuery.genreId);
  const genreName = useGenre(genreId);

  const platformId = useGameQueryStore(
    (selector) => selector.gameQuery.platformId
  );
  const platformName = usePlatform(platformId);

  const heading = `${platformName} ${genreName} Games`;

  return <h1 className="mb-4">{heading}</h1>;
};

export default GameHeading;
