import { useParams } from "react-router-dom";
import ExpandableText from "../../../../components/expandableText/ExpandableText";
import useGame from "../../hooks/useGame";
import GameAttributes from "../GameAttributes";
import GameScreenshots from "../GameScreenshots";
import GameTrailer from "../GameTrailer";
import GameDetailsSkeleton from "./GameDetailsSkeleton";

const GameDetails = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <GameDetailsSkeleton />;

  if (error || !game) throw error;

  return (
    <>
      <div className="container">
        <h1>{game.name}</h1>
        <div className="row">
          <div className="col-12 col-md-6">
            <ExpandableText children={game.description} />
            <GameAttributes game={game}></GameAttributes>
          </div>
          <div className="col-12 col-md-6">
            <GameTrailer gameId={game.id}></GameTrailer>
            <GameScreenshots gameId={game.id}></GameScreenshots>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameDetails;
