import type { GameQuery } from "../../App";

interface GameHeading {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeading) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return <h1 className="mb-4">{heading}</h1>;
};

export default GameHeading;
