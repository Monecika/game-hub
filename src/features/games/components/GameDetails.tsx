import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import ExpandableText from "../../../components/expandableText/ExpandableText";
import GameAttributes from "./GameAttributes";
import GameTrailer from "./GameTrailer";
import GameScreenshots from "./GameScreenshots";

const GameDetails = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading)
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );

  if (error || !game) throw error;

  return (
    <>
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
    </>
  );
};

export default GameDetails;
